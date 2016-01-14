/**
 *
 * @author Victor Häggqvist
 * @since 2016-01-14
 */

export class ActivityIndicator {

    constructor() {
        this.element = document.createElement('div');
        this.element.id = 'imagelightbox-loading';
        this.element.appendChild(document.createElement('div'))
    }

    /**
     *
     * @param {LightBox} lightbox
     */
    register(lightbox) {
        lightbox.addOnLoadStartListener(this.activityIndicatorOn.bind(this));
        lightbox.addOnLoadEndListener(this.activityIndicatorOff.bind(this));
        lightbox.addOnEndListener(this.activityIndicatorOff.bind(this));
    }

    activityIndicatorOn() {
        document.body.appendChild(this.element);
        //$('<div id="imagelightbox-loading"><div></div></div>' ).appendTo('body');
    }

    activityIndicatorOff() {
        try {
            document.body.removeChild(this.element);
        } catch (e) {}
    }

}
