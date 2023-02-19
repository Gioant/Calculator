let item;

// Set the delay time in milliseconds
const delayTime = 6000;

// Wait for the page to load before running the code
$(document).ready(function () {
    // Start the calculator animation
    animateCalculator(0);

    // Add a delay before redirecting to index.html
    setTimeout(function () {
        $('body').fadeOut(500, function () {
            window.location.href = "../index.html";
        });
    }, delayTime);
});



function animateCalculator(counter) {
    let polys = $("#calc").children("g").children("polygon");
    let rand = getRandom(0, polys.length - 1);
    item = $(polys[rand]);
    let screen = $("#screen");
    let color = new RColor();
    let color2 = color.get(true, 0.88, 0.88);
    color = color.get(true, 0.90, 0.99);

    TweenMax.to(screen, 0.5, { fill: color2 });
    TweenMax.to(item, 0.5, {
        fill: color, onComplete: function () {
            counter++;
            item.css("fill", "#434242");

            if (counter < 500) {
                animateCalculator(counter);
            }

        }, onCompleteParams: [item]
    });

}

/** 
 * getRandom * Description
 * @param {type} max* Description
 * @param {type} min* Description
 **/
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

(function (root, factory) {
    if (typeof exports === 'object') {
        module.exports = factory;
    } else if (typeof define === 'function' && define.amd) {
        define(factory);
    } else {
        root.RColor = factory();
    }
}(this, function () {

    let RColor = function () {
        this.hue = Math.random(),
            this.goldenRatio = 0.618033988749895;
        this.hexwidth = 2;
    };

    RColor.prototype.hsvToRgb = function (h, s, v) {
        let h_i = Math.floor(h * 6),
            f = h * 6 - h_i,
            p = v * (1 - s),
            q = v * (1 - f * s),
            t = v * (1 - (1 - f) * s),
            r = 255,
            g = 255,
            b = 255;
        switch (h_i) {
            case 0: r = v, g = t, b = p; break;
            case 1: r = q, g = v, b = p; break;
            case 2: r = p, g = v, b = t; break;
            case 3: r = p, g = q, b = v; break;
            case 4: r = t, g = p, b = v; break;
            case 5: r = v, g = p, b = q; break;
        }
        return [Math.floor(r * 256), Math.floor(g * 256), Math.floor(b * 256)];
    };

    RColor.prototype.padHex = function (str) {
        if (str.length > this.hexwidth) return str;
        return new Array(this.hexwidth - str.length + 1).join('0') + str;
    };

    RColor.prototype.get = function (hex, saturation, value) {
        this.hue += this.goldenRatio;
        this.hue %= 1;
        if (typeof saturation !== "number") saturation = 0.5;
        if (typeof value !== "number") value = 0.95;
        let rgb = this.hsvToRgb(this.hue, saturation, value);
        if (hex)
            return "#" + this.padHex(rgb[0].toString(16))
                + this.padHex(rgb[1].toString(16))
                + this.padHex(rgb[2].toString(16));
        else
            return rgb;
    };

    return RColor;

}));