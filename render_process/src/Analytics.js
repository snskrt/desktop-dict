import GA from 'electron-google-analytics';

class Analytics {
    constructor(version) {
        this.version = version;
        this.ga = new GA('UA-97081361-3'); // TODO put this to config file or env
    }

    screen(screen) {
        this.ga.screen(
            'snskrt-desktop',
            this.version,
            null,
            null,
            screen
        );
    }

    event(category, action, label) {
        this.ga.event(category, action, {evLabel: label});
    }
}

export default Analytics;