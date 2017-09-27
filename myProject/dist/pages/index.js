'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _tab = require('./../components/tab.js');

var _tab2 = _interopRequireDefault(_tab);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//  导入组件
//  错误写法 .pwy
//  import Tab from '../components/tab.wpy'


var Index = function (_wepy$page) {
  _inherits(Index, _wepy$page);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      'navigationBarTitleText': '我',
      'navigationBarTextStyle': 'white',
      'navigationBarBackgroundColor': '#3a393e'
    }, _this.data = {
      currentTab: 0,
      userInfo: {}
    }, _this.$props = { "tab": { "xmlns:v-bind": "", "v-bind:tabNumber.once": "currentTab" } }, _this.$events = {}, _this.components = {
      tab: _tab2.default
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {
      var _this2 = this;

      if (this.$parent.globalData.userInfo) {
        this.userInfo = this.$parent.globalData.userInfo;
      } else {
        this.$parent.userInfoReadyCallback = function (res) {
          _this2.userInfo = res.userInfo;
        };
      }
    }
  }, {
    key: 'onReady',
    value: function onReady() {}
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwiZGF0YSIsImN1cnJlbnRUYWIiLCJ1c2VySW5mbyIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwidGFiIiwiJHBhcmVudCIsImdsb2JhbERhdGEiLCJ1c2VySW5mb1JlYWR5Q2FsbGJhY2siLCJyZXMiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUlBOzs7Ozs7Ozs7OztBQUhBO0FBQ0E7QUFDQTs7O0lBR3FCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQLGdDQUEwQixHQURuQjtBQUVQLGdDQUEwQixPQUZuQjtBQUdQLHNDQUFnQztBQUh6QixLLFFBS1RDLEksR0FBTztBQUNMQyxrQkFBWSxDQURQO0FBRUxDLGdCQUFVO0FBRkwsSyxRQUlSQyxNLEdBQVMsRUFBQyxPQUFNLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIseUJBQXdCLFlBQTNDLEVBQVAsRSxRQUNaQyxPLEdBQVUsRSxRQUNUQyxVLEdBQWE7QUFDUkM7QUFEUSxLOzs7Ozs2QkFHQTtBQUFBOztBQUNSLFVBQUksS0FBS0MsT0FBTCxDQUFhQyxVQUFiLENBQXdCTixRQUE1QixFQUFzQztBQUNwQyxhQUFLQSxRQUFMLEdBQWdCLEtBQUtLLE9BQUwsQ0FBYUMsVUFBYixDQUF3Qk4sUUFBeEM7QUFDRCxPQUZELE1BR0s7QUFDSCxhQUFLSyxPQUFMLENBQWFFLHFCQUFiLEdBQXFDLGVBQU87QUFDMUMsaUJBQUtQLFFBQUwsR0FBZ0JRLElBQUlSLFFBQXBCO0FBQ0QsU0FGRDtBQUdEO0FBQ0Y7Ozs4QkFDVSxDQUVWOzs7O0VBM0JnQyxlQUFLUyxJOztrQkFBbkJiLEsiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgLy8gIOWvvOWFpee7hOS7tlxuICAvLyAg6ZSZ6K+v5YaZ5rOVIC5wd3lcbiAgLy8gIGltcG9ydCBUYWIgZnJvbSAnLi4vY29tcG9uZW50cy90YWIud3B5J1xuICBpbXBvcnQgVGFiIGZyb20gJy4uL2NvbXBvbmVudHMvdGFiJ1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgICAnbmF2aWdhdGlvbkJhclRpdGxlVGV4dCc6ICfmiJEnLFxuICAgICAgJ25hdmlnYXRpb25CYXJUZXh0U3R5bGUnOiAnd2hpdGUnLFxuICAgICAgJ25hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3InOiAnIzNhMzkzZSdcbiAgICB9XG4gICAgZGF0YSA9IHtcbiAgICAgIGN1cnJlbnRUYWI6IDAsXG4gICAgICB1c2VySW5mbzoge31cbiAgICB9XG4gICAkcHJvcHMgPSB7XCJ0YWJcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOnRhYk51bWJlci5vbmNlXCI6XCJjdXJyZW50VGFiXCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICAgIHRhYjogVGFiXG4gICAgfVxuICAgIG9uTG9hZCAoKSB7XG4gICAgICBpZiAodGhpcy4kcGFyZW50Lmdsb2JhbERhdGEudXNlckluZm8pIHtcbiAgICAgICAgdGhpcy51c2VySW5mbyA9IHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLnVzZXJJbmZvXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdGhpcy4kcGFyZW50LnVzZXJJbmZvUmVhZHlDYWxsYmFjayA9IHJlcyA9PiB7XG4gICAgICAgICAgdGhpcy51c2VySW5mbyA9IHJlcy51c2VySW5mb1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIG9uUmVhZHkgKCkge1xuXG4gICAgfVxuICB9XG4iXX0=