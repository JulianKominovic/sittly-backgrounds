"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// src/index.tsx
var import_react3 = window.React;

// node_modules/.pnpm/react-icons@4.10.1_react@18.2.0/node_modules/react-icons/lib/esm/iconBase.js
var import_react2 = {default:window.React};

// node_modules/.pnpm/react-icons@4.10.1_react@18.2.0/node_modules/react-icons/lib/esm/iconContext.js
var import_react = {default:window.React};
var DefaultContext = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
};
var IconContext = import_react.default.createContext && import_react.default.createContext(DefaultContext);

// node_modules/.pnpm/react-icons@4.10.1_react@18.2.0/node_modules/react-icons/lib/esm/iconBase.js
var __assign = function() {
  __assign = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var __rest = function(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
function Tree2Element(tree) {
  return tree && tree.map(function(node, i) {
    return import_react2.default.createElement(node.tag, __assign({
      key: i
    }, node.attr), Tree2Element(node.child));
  });
}
__name(Tree2Element, "Tree2Element");
function GenIcon(data) {
  return function(props) {
    return import_react2.default.createElement(IconBase, __assign({
      attr: __assign({}, data.attr)
    }, props), Tree2Element(data.child));
  };
}
__name(GenIcon, "GenIcon");
function IconBase(props) {
  var elem = /* @__PURE__ */ __name(function(conf) {
    var attr = props.attr, size = props.size, title = props.title, svgProps = __rest(props, ["attr", "size", "title"]);
    var computedSize = size || conf.size || "1em";
    var className;
    if (conf.className)
      className = conf.className;
    if (props.className)
      className = (className ? className + " " : "") + props.className;
    return import_react2.default.createElement("svg", __assign({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, conf.attr, attr, svgProps, {
      className,
      style: __assign(__assign({
        color: props.color || conf.color
      }, conf.style), props.style),
      height: computedSize,
      width: computedSize,
      xmlns: "http://www.w3.org/2000/svg"
    }), title && import_react2.default.createElement("title", null, title), props.children);
  }, "elem");
  return IconContext !== void 0 ? import_react2.default.createElement(IconContext.Consumer, null, function(conf) {
    return elem(conf);
  }) : elem(DefaultContext);
}
__name(IconBase, "IconBase");

// node_modules/.pnpm/react-icons@4.10.1_react@18.2.0/node_modules/react-icons/bs/index.esm.js
function BsCardImage(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "currentColor", "viewBox": "0 0 16 16" }, "child": [{ "tag": "path", "attr": { "d": "M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" } }, { "tag": "path", "attr": { "d": "M1.5 2A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13zm13 1a.5.5 0 0 1 .5.5v6l-3.775-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12v.54A.505.505 0 0 1 1 12.5v-9a.5.5 0 0 1 .5-.5h13z" } }] })(props);
}
__name(BsCardImage, "BsCardImage");
function BsDownload(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "currentColor", "viewBox": "0 0 16 16" }, "child": [{ "tag": "path", "attr": { "d": "M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" } }, { "tag": "path", "attr": { "d": "M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" } }] })(props);
}
__name(BsDownload, "BsDownload");
function BsGlobe(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "currentColor", "viewBox": "0 0 16 16" }, "child": [{ "tag": "path", "attr": { "d": "M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z" } }] })(props);
}
__name(BsGlobe, "BsGlobe");

// src/index.tsx
var { register, api, components, hooks } = window.SittlyDevtools;
var { Command } = components;
var { useServices } = hooks;
var { shell, files } = api;
var { saveImage } = files;
var { setWallpaper, openURI } = shell;
var WALLPAPERS_LENGTH = 354;
var MemoizedImage = (0, import_react3.memo)(({ imageUrl }) => /* @__PURE__ */ React.createElement(
  "img",
  {
    src: imageUrl,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      borderRadius: "8px"
    }
  }
));
var pages = [
  {
    name: "Wallpapers",
    route: "/wallpapers",
    icon: /* @__PURE__ */ React.createElement(BsCardImage, null),
    description: "Choose between 350 AI generated wallpapers",
    component: () => {
      const setContextMenuOptions = useServices(
        (state) => state.setContextMenuOptions
      );
      return /* @__PURE__ */ React.createElement(
        Command.Grid,
        {
          columns: 3,
          id: "sittly-wallpapers",
          items: Array.from({ length: WALLPAPERS_LENGTH }).map((_, index) => {
            const padding = String(index + 1).padStart(3, "0");
            const imageUrl = `https://raw.githubusercontent.com/JulianKominovic/sittly-wallpapers/main/assets/dddepth-${padding}.jpg?raw=true`;
            const tinyImageUrl = `https://raw.githubusercontent.com/JulianKominovic/sittly-wallpapers/main/assets/tiny/dddepth-${padding}.webp`;
            return {
              customChildren: /* @__PURE__ */ React.createElement(MemoizedImage, { imageUrl: tinyImageUrl, key: tinyImageUrl }),
              onClick: () => setWallpaper(imageUrl),
              filteringText: padding,
              onHighlight() {
                setContextMenuOptions([
                  {
                    onClick() {
                      setWallpaper(imageUrl);
                    },
                    title: "Set as wallpaper",
                    icon: /* @__PURE__ */ React.createElement(BsCardImage, null),
                    description: "Set this image as your wallpaper"
                  },
                  {
                    onClick() {
                      saveImage(imageUrl);
                    },
                    title: "Download",
                    icon: /* @__PURE__ */ React.createElement(BsDownload, null),
                    description: "this image"
                  },
                  {
                    onClick() {
                      openURI("https://fffuel.co/dddepth/");
                    },
                    title: "Thanks to fffuel",
                    icon: /* @__PURE__ */ React.createElement(BsGlobe, null),
                    description: "Visit fffuel's website"
                  }
                ]);
              }
            };
          })
        }
      );
    }
  }
];
var metadata = {
  name: "Wallpapers",
  description: "Choose between 350 AI generated wallpapers",
  icon: /* @__PURE__ */ React.createElement(BsCardImage, null),
  repoUrl: "https://github.com/JulianKominovic/sittly-wallpapers"
};
register({
  pages,
  metadata
});
