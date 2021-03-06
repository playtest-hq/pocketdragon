import { Build, Component, Element, h, State, Watch } from '@stencil/core';
import { dialog, iconButton } from 'material-components-web';
import Storage from '../../services/storage';

const MINUTES = 60;

const EASY = {
    goalNumberOfSuccesses: 3,
    initialFeedTimer: 2,
    initialGameTimer: 5,
    name: 'easy',
    points: 1,
};

const MEDIUM = {
    goalNumberOfSuccesses: 5,
    initialFeedTimer: 2,
    initialGameTimer: 6,
    name: 'medium',
    points: 3,
};

const HARD = {
    goalNumberOfSuccesses: 7,
    initialFeedTimer: 2,
    initialGameTimer: 7,
    name: 'hard',
    points: 8,
};

const WON = {
    won: true,
    buttonLabel: 'Yay!',
    heading: 'You Won!',
    text:
        'Congratulations on successfully helping your Dragon find a happy life!',
};

const LOST = {
    won: false,
    buttonLabel: 'Try again!',
    heading: 'Oh noes!',
    text: "Unfortunately, you didn't do so well this time…",
};

const GENERIC_CLUE_COST = 1;
const SPECIFIC_CLUE_COST = 2;

const CAN_FEED_WHEN_FEEDTIMER_IS_BELOW = 30;

const SECONDS_WORTH_ONE_POINT = 10;

@Component({
    tag: 'app-home',
    styleUrl: 'app-home.scss',
})
export class AppHome {
    @Element() public htmlElement: HTMLElement;

    @State() private clueTimer = 0;
    @State() private difficultyLevel = '';
    @State() private feedTimer = 0;
    @State() private gameOverDialog;
    @State() private rulesDialog;
    @State() private gameTimer = 0;
    @State() private goalNumberOfSuccesses = 0;
    @State() private initialFeedTimer = 0;
    @State() private initialGameTimer = 0;
    @State() private initialNumberOfClues = 3;
    @State() private intervalHandle;
    @State() private isRunning = false;
    @State() private remainingClues = 0;
    @State() private resultButtonLabel = '';
    @State() private resultHeading = '';
    @State() private resultText = '';
    @State() private successesUntilVictory = 0;
    @State() private toggleSoundButton;
    @State() private soundEnabled: boolean;
    @State() private storage: Storage;
    @State() private timerBeep: HTMLAudioElement;
    @State() private timerBeep2x: HTMLAudioElement;
    @State() private timerBeep3x: HTMLAudioElement;
    @State() private timerPoints = 0;
    @State() private difficultyPoints = 0;
    @State() private gameWon = false;

    public componentWillLoad() {
        if (Build.isBrowser) {
            this.storage = new Storage();
            this.storage.get('soundEnabled').then(soundEnabled => {
                if (soundEnabled === null) {
                    soundEnabled = true;
                }
                this.soundEnabled = soundEnabled;
                if (this.toggleSoundButton) {
                    this.toggleSoundButton.on = this.soundEnabled;
                }
                this.storage.set('soundEnabled', this.soundEnabled);
            });
        }
    }

    public componentDidLoad() {
        this.setDifficulty(EASY);
        this.timerBeep = this.htmlElement.querySelector('#timer-beep');
        this.timerBeep2x = this.htmlElement.querySelector('#timer-beep-2x');
        this.timerBeep3x = this.htmlElement.querySelector('#timer-beep-3x');
        this.rulesDialog = this.htmlElement.querySelector('app-rules');
        this.gameOverDialog = new dialog.MDCDialog(
            document.querySelector('#game-over-dialog')
        );
        this.gameOverDialog.listen('MDCDialog:accept', () => {
            this.resetGame();
        });
        this.gameOverDialog.listen('MDCDialog:cancel', () => {
            this.resetGame();
        });

        this.toggleSoundButton = new iconButton.MDCIconButtonToggle(
            this.htmlElement.querySelector('#toggle-sound')
        );
        if (this.soundEnabled) {
            this.toggleSoundButton.on = this.soundEnabled;
        }
        this.toggleSoundButton.listen('MDCIconButtonToggle:change', data => {
            this.soundEnabled = data.detail.isOn;
            this.storage.set('soundEnabled', this.soundEnabled);
            if (this.soundEnabled) {
                this.timerBeep.play();
            }
        });
    }

    public componentDidUnload() {
        this.gameOverDialog.destroy();
        this.toggleSoundButton.destroy();
    }

    public render() { // tslint:disable-line:no-big-function prettier
        return (
            <section class="app-home">
                <div class="difficulty-controls">
                    <pd-button
                        label="Easy"
                        onClick={this.setDifficulty.bind(this, EASY)}
                        disabled={this.isRunning}
                        selected={this.difficultyLevel === 'easy'}
                        color="green"
                    />
                    <pd-button
                        label="Medium"
                        onClick={this.setDifficulty.bind(this, MEDIUM)}
                        disabled={this.isRunning}
                        selected={this.difficultyLevel === 'medium'}
                        color="yellow"
                    />
                    <pd-button
                        label="Hard"
                        onClick={this.setDifficulty.bind(this, HARD)}
                        disabled={this.isRunning}
                        selected={this.difficultyLevel === 'hard'}
                        color="red"
                    />
                </div>
                <div class="game-controls">
                    <pd-button
                        label={this.isRunning ? 'Pause' : 'Start'}
                        onClick={this.playOrPause.bind(this)}
                        primary={true}
                        color="green"
                    />
                    <pd-button
                        label="Reset"
                        onClick={this.resetGame.bind(this)}
                        disabled={this.isRunning}
                    />
                </div>
                <div class="timers">
                    <div>
                        <p>Game time left:</p>
                        <p class="timer">{this.gameTimer}</p>
                    </div>
                    <div class={this.isFeedingAllowed() ? 'warning' : ''}>
                        <p>Feeder time left:</p>
                        <p class="timer">{this.feedTimer}</p>
                    </div>
                </div>
                <div>
                    <pd-button
                        label="Feed!"
                        onClick={this.feed.bind(this)}
                        disabled={!this.isFeedingAllowed()}
                        primary={true}
                        color="red"
                    />
                </div>
                <div class="successes">
                    <div>
                        Number of
                        <br />
                        successes left:
                    </div>
                    <div class="counter">{this.successesUntilVictory}</div>
                </div>
                <p>
                    <pd-button
                        label="Log success"
                        onClick={this.logSuccess.bind(this)}
                        disabled={!this.isRunning}
                        primary={true}
                    />
                </p>
                <div>
                    <p>
                        Remaining clues: <b>{this.remainingClues}</b>
                    </p>
                    <div class="clue-buttons">
                        <div>
                            <pd-button
                                label="Use general clue"
                                onClick={this.useGeneralClue.bind(this)}
                                disabled={!this.isGeneralClueAllowed()}
                                primary={true}
                            />
                        </div>
                        <div>
                            <pd-button
                                label="Use specific clue"
                                onClick={this.useSpecificClue.bind(this)}
                                disabled={!this.isSpecificClueAllowed()}
                                primary={true}
                            />
                        </div>
                    </div>
                </div>

                <p class="rules-version">
                    <a
                        href=""
                        onClick={event => {
                            event.preventDefault();
                            this.showRules();
                        }}
                    >
                        Rules version: 1.0.1
                    </a>
                </p>

                <aside class="settings">
                    <button
                        id="toggle-sound"
                        class="mdc-icon-button material-icons"
                        aria-label="Toggle sound"
                        aria-hidden="true"
                        aria-pressed={this.soundEnabled}
                        data-toggle-on-content="volume_up"
                        data-toggle-on-label="Disable sound"
                        data-toggle-off-content="volume_off"
                        data-toggle-off-label="Enable sound"
                    />
                </aside>

                <aside id="game-over-dialog" class="mdc-dialog">
                    <div class="mdc-dialog__surface">
                        <header class="mdc-dialog__header">
                            <h2 class="mdc-dialog__header__title">
                                {this.resultHeading}
                            </h2>
                        </header>
                        <section class="mdc-dialog__body">
                            {this.resultText}
                            <span
                                class={`
                                    points
                                    ${this.gameWon ? 'game-won' : 'game-lost'}
                                `}
                            >
                                <p>Base points: {this.difficultyPoints}</p>
                                <p>Time points: {this.timerPoints}</p>
                                <p>+1 point for each remaining Happiness!</p>
                            </span>
                        </section>
                        <footer class="mdc-dialog__footer">
                            <pd-button
                                class="mdc-dialog__footer__button--accept"
                                label={this.resultButtonLabel}
                                primary={true}
                            />
                        </footer>
                    </div>
                    <div class="mdc-dialog__backdrop" />
                </aside>

                <app-rules />

                <audio id="timer-beep" preload="auto">
                    <source src="/assets/sound/cling_2.mp3" type="audio/mp3" />
                    <source src="/assets/sound/cling_2.ogg" type="audio/ogg" />
                    <source src="/assets/sound/cling_2.wav" type="audio/wave" />
                    <source src="/assets/sound/cling_2.wav" type="audio/wav" />
                    <p>Your browser does not support html5 audio.</p>
                </audio>
                <audio id="timer-beep-2x" preload="auto">
                    <source
                        src="/assets/sound/cling_2-2x.mp3"
                        type="audio/mp3"
                    />
                    <source
                        src="/assets/sound/cling_2-2x.ogg"
                        type="audio/ogg"
                    />
                    <source
                        src="/assets/sound/cling_2-2x.wav"
                        type="audio/wave"
                    />
                    <source
                        src="/assets/sound/cling_2-2x.wav"
                        type="audio/wav"
                    />
                    <p>Your browser does not support html5 audio.</p>
                </audio>
                <audio id="timer-beep-3x" preload="auto">
                    <source
                        src="/assets/sound/cling_2-3x.mp3"
                        type="audio/mp3"
                    />
                    <source
                        src="/assets/sound/cling_2-3x.ogg"
                        type="audio/ogg"
                    />
                    <source
                        src="/assets/sound/cling_2-3x.wav"
                        type="audio/wave"
                    />
                    <source
                        src="/assets/sound/cling_2-3x.wav"
                        type="audio/wav"
                    />
                    <p>Your browser does not support html5 audio.</p>
                </audio>
            </section>
        );
    }

    @Watch('soundEnabled')
    protected soundEnabledWatcher(value) {
        if (this.toggleSoundButton) {
            this.toggleSoundButton.on = value;
        }
    }

    private isFeedingAllowed() {
        return (
            this.isRunning && this.feedTimer <= CAN_FEED_WHEN_FEEDTIMER_IS_BELOW
        );
    }

    private isGeneralClueAllowed() {
        return this.isRunning && this.remainingClues >= GENERIC_CLUE_COST;
    }

    private isSpecificClueAllowed() {
        return this.isRunning && this.remainingClues >= SPECIFIC_CLUE_COST;
    }

    private resetGame() {
        clearInterval(this.intervalHandle);
        this.isRunning = false;
        this.gameTimer = this.initialGameTimer;
        this.feedTimer = this.initialFeedTimer;
        this.successesUntilVictory = this.goalNumberOfSuccesses;
        this.remainingClues = this.initialNumberOfClues;
    }

    private setDifficulty(config) {
        this.initialFeedTimer = config.initialFeedTimer * MINUTES;
        this.initialGameTimer = config.initialGameTimer * MINUTES;
        this.goalNumberOfSuccesses = config.goalNumberOfSuccesses;
        this.difficultyLevel = config.name;
        this.difficultyPoints = config.points;
        this.resetGame();
    }

    private startGame() {
        this.isRunning = true;
        if (this.clueTimer < 1) {
            this.setClueTimer();
        }
        const ONE_SECOND = 1000;
        const FEED_WARNING_1 = 30;
        const FEED_WARNING_2 = 20;
        const FEED_WARNING_3 = 10;
        this.intervalHandle = setInterval(() => {
            this.gameTimer -= 1;
            this.feedTimer -= 1;
            this.clueTimer -= 1;
            if (this.soundEnabled && this.feedTimer === FEED_WARNING_1) {
                this.timerBeep.play();
            }
            if (this.soundEnabled && this.feedTimer === FEED_WARNING_2) {
                this.timerBeep2x.play();
            }
            if (this.soundEnabled && this.feedTimer === FEED_WARNING_3) {
                this.timerBeep3x.play();
            }
            if (this.clueTimer < 1) {
                this.remainingClues += 1;
                this.setClueTimer();
            }
            if (this.feedTimer < 1 || this.gameTimer < 1) {
                this.isRunning = false;
                clearInterval(this.intervalHandle);
                this.gameOver(LOST);
            }
        }, ONE_SECOND);
    }

    private pauseGame() {
        clearInterval(this.intervalHandle);
        this.isRunning = false;
    }

    private playOrPause() {
        if (this.isRunning) {
            this.pauseGame();
        } else {
            this.startGame();
        }
    }

    private feed() {
        this.feedTimer = this.initialFeedTimer - this.feedTimer;
    }

    private logSuccess() {
        this.successesUntilVictory -= 1;
        if (this.successesUntilVictory < 1) {
            clearInterval(this.intervalHandle);
            this.isRunning = false;
            this.gameOver(WON);
        }
    }

    private useGeneralClue() {
        this.remainingClues -= GENERIC_CLUE_COST;
    }

    private useSpecificClue() {
        this.remainingClues -= SPECIFIC_CLUE_COST;
    }

    private setClueTimer() {
        const minClueTime = 15;
        const maxClueTime = 20;
        this.clueTimer = Math.round(
            Math.random() * (maxClueTime - minClueTime) + minClueTime
        );
    }

    private gameOver(result) {
        if (result.won) {
            this.timerPoints = Math.floor(
                this.gameTimer / SECONDS_WORTH_ONE_POINT
            );
        }
        this.gameWon = result.won;
        this.resultHeading = result.heading;
        this.resultText = result.text;
        this.resultButtonLabel = result.buttonLabel;
        this.gameOverDialog.show();
    }

    private showRules() {
        this.rulesDialog.showRules();
    }
}
