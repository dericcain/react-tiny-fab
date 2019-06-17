import React, { useState } from 'react';

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
<<<<<<< HEAD

    return target;
  };

  return _extends.apply(this, arguments);
}

const AB=a=>React.createElement("button",_extends({type:"button"},a,{className:"rtf--ab"}),a.children);const MB=a=>React.createElement("button",_extends({type:"button",className:"rtf--mb"},a),a.children);const Fab=({event:a,children:b,position:c,icon:d,mainButtonStyles:e})=>{const[f,g]=useState(!1),h=()=>g(!0),i=()=>g(!1),j=a=>{g(!1),setTimeout(()=>{a();},1);};return React.createElement("ul",{onMouseEnter:()=>"hover"===a&&h(),onMouseLeave:()=>"hover"===a&&i(),className:`rtf ${f?"open":"closed"}`,"data-testid":"fab",style:c},React.createElement("li",{className:"rtf--mb__c"},React.createElement(MB,{onClick:()=>"click"===a?f?i():h():null,style:e,"data-testid":"main-button",role:"button","aria-label":"Floating menu",tabIndex:"0"},d),React.createElement("ul",null,(()=>(6<React.Children.count(b)&&console.warn("react-tiny-fab only supports up to 6 action buttons"),React.Children.map(b,(a,b)=>React.createElement("li",{className:`rtf--ab__c ${"top"in c?"top":""}`},React.cloneElement(a,{"data-testid":`action-button-${b}`,"aria-label":a.props.text||`Menu button ${b+1}`,"aria-hidden":!f,...a.props,onClick:()=>j(a.props.onClick)}),a.props.text&&React.createElement("span",{className:"right"in c?"right":"","aria-hidden":!f},a.props.text)))))())))};Fab.defaultProps={position:{bottom:0,right:0},event:"hover"};

export { AB as Action, Fab, MB };
t__default.Children.map(b,(a,b)=>React__default.createElement("li",{className:`rtf--ab__c ${"top"in c?"top":""}`},React__default.cloneElement(a,{"data-testid":`action-button-${b}`,"aria-label":a.props.text||`Menu button ${b+1}`,"aria-hidden":!f,...a.props,onClick:()=>j(a.props.onClick)}),a.props.text&&React__default.createElement("span",{className:"right"in c?"right":"","aria-hidden":!f},a.props.text)))))())))};Fab.defaultProps={position:{bottom:0,right:0},event:"hover"};
=======

    return target;
  };
>>>>>>> Added docs to gitignore

  return _extends.apply(this, arguments);
}

const AB=a=>React.createElement("button",_extends({type:"button"},a,{className:"rtf--ab"}),a.children);const MB=a=>React.createElement("button",_extends({type:"button",className:"rtf--mb"},a),a.children);const Fab=({event:a,children:b,position:c,icon:d,mainButtonStyles:e})=>{const[f,g]=useState(!1),h=()=>g(!0),i=()=>g(!1),j=a=>{g(!1),setTimeout(()=>{a();},1);};return React.createElement("ul",{onMouseEnter:()=>"hover"===a&&h(),onMouseLeave:()=>"hover"===a&&i(),className:`rtf ${f?"open":"closed"}`,"data-testid":"fab",style:c},React.createElement("li",{className:"rtf--mb__c"},React.createElement(MB,{onClick:()=>"click"===a?f?i():h():null,style:e,"data-testid":"main-button",role:"button","aria-label":"Floating menu",tabIndex:"0"},d),React.createElement("ul",null,(()=>(6<React.Children.count(b)&&console.warn("react-tiny-fab only supports up to 6 action buttons"),React.Children.map(b,(a,b)=>React.createElement("li",{className:`rtf--ab__c ${"top"in c?"top":""}`},React.cloneElement(a,{"data-testid":`action-button-${b}`,"aria-label":a.props.text||`Menu button ${b+1}`,"aria-hidden":!f,...a.props,onClick:()=>j(a.props.onClick)}),a.props.text&&React.createElement("span",{className:"right"in c?"right":"","aria-hidden":!f},a.props.text)))))())))};Fab.defaultProps={position:{bottom:24,right:24},event:"hover"};

export { AB as Action, Fab, MB };
