import { createElement, Children, cloneElement, Component } from 'react';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
}

var cx = function (className, prevClassName) { return Boolean(prevClassName)
    ? className + " " + prevClassName
    : "" + className; };
var ActionButton = function (_a) {
    var children = _a.children, props = __rest(_a, ["children"]);
    return (createElement("button", __assign({ type: "button" }, props), children));
};
var MainButton = function (_a) {
    var children = _a.children, isOpen = _a.isOpen, className = _a.className, style = _a.style, props = __rest(_a, ["children", "isOpen", "className", "style"]);
    return (createElement("button", __assign({ type: "button", className: cx(isOpen ? 'open' : 'closed', className), style: style }, props), children));
};

var calculatePosition = function (positionProp) {
    var rootStyles = document.documentElement.style;
    if (typeof positionProp === 'string') {
        switch (positionProp) {
            case 'top-left':
                if (rootStyles) {
                    rootStyles.setProperty('--react-fab-text-percent', 'none');
                    rootStyles.setProperty('--react-fab-position-multiplier', '-1');
                }
                return { top: 0, left: 0 };
            case 'top-right':
                if (rootStyles) {
                    rootStyles.setProperty('--react-fab-position-multiplier', '-1');
                }
                return { top: 0, right: 0 };
            case 'bottom-left':
                if (rootStyles) {
                    rootStyles.setProperty('--react-fab-text-percent', 'z');
                }
                return { bottom: 0, left: 0 };
            case 'bottom-right':
            default:
                return { bottom: 0, right: 0 };
        }
    }
    if (Boolean(positionProp.left && rootStyles)) {
        rootStyles.setProperty('--react-fab-text-percent', 'none');
    }
    return positionProp;
};
var Fab = /** @class */ (function (_super) {
    __extends(Fab, _super);
    function Fab() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            isOpen: false,
        };
        _this.handleOnMouseEnter = function () {
            _this.setState({ isOpen: true });
        };
        _this.handleOnMouseLeave = function () {
            _this.setState({ isOpen: false });
        };
        return _this;
    }
    Fab.prototype.render = function () {
        var isOpen = this.state.isOpen;
        var _a = this.props, position = _a.position, component = _a.component, mainButtonStyles = _a.mainButtonStyles;
        return (createElement("ul", { onMouseEnter: this.handleOnMouseEnter, onMouseLeave: this.handleOnMouseLeave, className: "react-fab", style: calculatePosition(position) },
            createElement("li", null,
                createElement(MainButton, { isOpen: isOpen, style: mainButtonStyles }, component),
                createElement("ul", { className: isOpen ? 'open' : 'closed' }, this.renderChildren()))));
    };
    Fab.prototype.renderChildren = function () {
        var _a = this.props, children = _a.children, actionButtonStyles = _a.actionButtonStyles;
        var childCount = Children.count(children);
        if (childCount > Fab.MAX_ACTION_BUTTONS) {
            console.warn("react-tiny-fab only supports up to " + Fab.MAX_ACTION_BUTTONS + " action buttons and you have " + childCount + ".");
        }
        return Children.map(children, function (child) { return (createElement("li", null,
            cloneElement(child, { style: actionButtonStyles }),
            child.props.text && createElement("span", null, child.props.text))); });
    };
    Fab.defaultProps = {
        mainButtonStyles: {},
        actionButtonStyles: {},
    };
    Fab.MAX_ACTION_BUTTONS = 6;
    return Fab;
}(Component));

export default Fab;
export { ActionButton };
