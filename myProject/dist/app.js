'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

require('./npm/wepy-async-function/index.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _default = function (_wepy$app) {
  _inherits(_default, _wepy$app);

  function _default() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, _default);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = _default.__proto__ || Object.getPrototypeOf(_default)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      pages: ['pages/index'],
      window: {
        backgroundTextStyle: 'light',
        navigationBarBackgroundColor: '#fff',
        navigationBarTitleText: 'WeChat',
        navigationBarTextStyle: 'black'
      }
    }, _this.globalData = {
      userInfo: null
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(_default, [{
    key: 'onLaunch',
    value: function onLaunch() {
      var _this2 = this;

      wx.login({
        success: function success(res) {
          // 发送 res.code 到后台换取 openId, sessionKey, unionId
        }
      });
      // 获取用户信息
      wx.getUserInfo({
        success: function success(res) {
          // 可以将 res 发送给后台解码出 unionId
          _this2.globalData.userInfo = res.userInfo;
          console.log(_this2.globalData.userInfo);
          if (_this2.userInfoReadyCallback) {
            _this2.userInfoReadyCallback(res);
          }
        }
      });
    }
  }]);

  return _default;
}(_wepy2.default.app);


App(require('./npm/wepy/lib/wepy.js').default.$createApp(_default, undefined));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsIndpbmRvdyIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJnbG9iYWxEYXRhIiwidXNlckluZm8iLCJ3eCIsImxvZ2luIiwic3VjY2VzcyIsImdldFVzZXJJbmZvIiwicmVzIiwiY29uc29sZSIsImxvZyIsInVzZXJJbmZvUmVhZHlDYWxsYmFjayIsImFwcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBMQUdFQSxNLEdBQVM7QUFDUEMsYUFBTyxDQUNMLGFBREssQ0FEQTtBQUlQQyxjQUFRO0FBQ05DLDZCQUFxQixPQURmO0FBRU5DLHNDQUE4QixNQUZ4QjtBQUdOQyxnQ0FBd0IsUUFIbEI7QUFJTkMsZ0NBQXdCO0FBSmxCO0FBSkQsSyxRQVdUQyxVLEdBQWE7QUFDWEMsZ0JBQVU7QUFEQyxLOzs7OzsrQkFHRDtBQUFBOztBQUVWQyxTQUFHQyxLQUFILENBQVM7QUFDUEMsaUJBQVMsc0JBQU87QUFDZDtBQUNEO0FBSE0sT0FBVDtBQUtBO0FBQ0FGLFNBQUdHLFdBQUgsQ0FBZTtBQUNiRCxpQkFBUyxzQkFBTztBQUNkO0FBQ0EsaUJBQUtKLFVBQUwsQ0FBZ0JDLFFBQWhCLEdBQTJCSyxJQUFJTCxRQUEvQjtBQUNBTSxrQkFBUUMsR0FBUixDQUFZLE9BQUtSLFVBQUwsQ0FBZ0JDLFFBQTVCO0FBQ0EsY0FBSSxPQUFLUSxxQkFBVCxFQUFnQztBQUM5QixtQkFBS0EscUJBQUwsQ0FBMkJILEdBQTNCO0FBQ0Q7QUFDRjtBQVJZLE9BQWY7QUFVRDs7OztFQWpDMEIsZUFBS0ksRyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgaW1wb3J0ICd3ZXB5LWFzeW5jLWZ1bmN0aW9uJ1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgd2VweS5hcHAge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIHBhZ2VzOiBbXG4gICAgICAgICdwYWdlcy9pbmRleCdcbiAgICAgIF0sXG4gICAgICB3aW5kb3c6IHtcbiAgICAgICAgYmFja2dyb3VuZFRleHRTdHlsZTogJ2xpZ2h0JyxcbiAgICAgICAgbmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvcjogJyNmZmYnLFxuICAgICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAnV2VDaGF0JyxcbiAgICAgICAgbmF2aWdhdGlvbkJhclRleHRTdHlsZTogJ2JsYWNrJ1xuICAgICAgfVxuICAgIH1cbiAgICBnbG9iYWxEYXRhID0ge1xuICAgICAgdXNlckluZm86IG51bGxcbiAgICB9XG4gICAgb25MYXVuY2ggKCkge1xuXG4gICAgICB3eC5sb2dpbih7XG4gICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XG4gICAgICAgICAgLy8g5Y+R6YCBIHJlcy5jb2RlIOWIsOWQjuWPsOaNouWPliBvcGVuSWQsIHNlc3Npb25LZXksIHVuaW9uSWRcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC8vIOiOt+WPlueUqOaIt+S/oeaBr1xuICAgICAgd3guZ2V0VXNlckluZm8oe1xuICAgICAgICBzdWNjZXNzOiByZXMgPT4ge1xuICAgICAgICAgIC8vIOWPr+S7peWwhiByZXMg5Y+R6YCB57uZ5ZCO5Y+w6Kej56CB5Ye6IHVuaW9uSWRcbiAgICAgICAgICB0aGlzLmdsb2JhbERhdGEudXNlckluZm8gPSByZXMudXNlckluZm9cbiAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmdsb2JhbERhdGEudXNlckluZm8pXG4gICAgICAgICAgaWYgKHRoaXMudXNlckluZm9SZWFkeUNhbGxiYWNrKSB7XG4gICAgICAgICAgICB0aGlzLnVzZXJJbmZvUmVhZHlDYWxsYmFjayhyZXMpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cblxuICB9XG4iXX0=