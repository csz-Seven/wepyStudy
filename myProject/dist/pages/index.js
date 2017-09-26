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
      currentTab: 3,
      userInfo: {
        nickName: null,
        avatarUrl: null
      }
    }, _this.$props = { "tab": { "xmlns:v-bind": "", "v-bind:tabNumber.once": "currentTab" } }, _this.$events = {}, _this.components = {
      tab: _tab2.default
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {
      this.getUserInfo();
    }
  }, {
    key: 'getUserInfo',
    value: function getUserInfo() {
      var _this2 = this;

      wx.login();
      wx.getUserInfo({
        success: function success(res) {
          _this2.userInfo.nickName = res.userInfo.nickName;
          _this2.userInfo.avatarUrl = res.userInfo.avatarUrl;
          console.log(_this2.userInfo.avatarUrl);
        }
      });
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwiZGF0YSIsImN1cnJlbnRUYWIiLCJ1c2VySW5mbyIsIm5pY2tOYW1lIiwiYXZhdGFyVXJsIiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJ0YWIiLCJnZXRVc2VySW5mbyIsInd4IiwibG9naW4iLCJzdWNjZXNzIiwicmVzIiwiY29uc29sZSIsImxvZyIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBSUE7Ozs7Ozs7Ozs7O0FBSEE7QUFDQTtBQUNBOzs7SUFHcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1AsZ0NBQTBCLEdBRG5CO0FBRVAsZ0NBQTBCLE9BRm5CO0FBR1Asc0NBQWdDO0FBSHpCLEssUUFLVEMsSSxHQUFPO0FBQ0xDLGtCQUFZLENBRFA7QUFFTEMsZ0JBQVU7QUFDUkMsa0JBQVMsSUFERDtBQUVSQyxtQkFBVTtBQUZGO0FBRkwsSyxRQU9SQyxNLEdBQVMsRUFBQyxPQUFNLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIseUJBQXdCLFlBQTNDLEVBQVAsRSxRQUNaQyxPLEdBQVUsRSxRQUNUQyxVLEdBQWE7QUFDUkM7QUFEUSxLOzs7Ozs2QkFHQTtBQUNSLFdBQUtDLFdBQUw7QUFDRDs7O2tDQUNjO0FBQUE7O0FBQ2JDLFNBQUdDLEtBQUg7QUFDQUQsU0FBR0QsV0FBSCxDQUFlO0FBQ2JHLGlCQUFTLGlCQUFDQyxHQUFELEVBQVM7QUFDaEIsaUJBQUtYLFFBQUwsQ0FBY0MsUUFBZCxHQUF1QlUsSUFBSVgsUUFBSixDQUFhQyxRQUFwQztBQUNBLGlCQUFLRCxRQUFMLENBQWNFLFNBQWQsR0FBd0JTLElBQUlYLFFBQUosQ0FBYUUsU0FBckM7QUFDQVUsa0JBQVFDLEdBQVIsQ0FBWSxPQUFLYixRQUFMLENBQWNFLFNBQTFCO0FBQ0Q7QUFMWSxPQUFmO0FBT0Q7Ozs7RUE5QmdDLGVBQUtZLEk7O2tCQUFuQmxCLEsiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgLy8gIOWvvOWFpee7hOS7tlxuICAvLyAg6ZSZ6K+v5YaZ5rOVIC5wd3lcbiAgLy8gIGltcG9ydCBUYWIgZnJvbSAnLi4vY29tcG9uZW50cy90YWIud3B5J1xuICBpbXBvcnQgVGFiIGZyb20gJy4uL2NvbXBvbmVudHMvdGFiJ1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgICAnbmF2aWdhdGlvbkJhclRpdGxlVGV4dCc6ICfmiJEnLFxuICAgICAgJ25hdmlnYXRpb25CYXJUZXh0U3R5bGUnOiAnd2hpdGUnLFxuICAgICAgJ25hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3InOiAnIzNhMzkzZSdcbiAgICB9XG4gICAgZGF0YSA9IHtcbiAgICAgIGN1cnJlbnRUYWI6IDMsXG4gICAgICB1c2VySW5mbzoge1xuICAgICAgICBuaWNrTmFtZTpudWxsLFxuICAgICAgICBhdmF0YXJVcmw6bnVsbFxuICAgICAgfVxuICAgIH1cbiAgICRwcm9wcyA9IHtcInRhYlwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6dGFiTnVtYmVyLm9uY2VcIjpcImN1cnJlbnRUYWJcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgdGFiOiBUYWJcbiAgICB9XG4gICAgb25Mb2FkICgpIHtcbiAgICAgIHRoaXMuZ2V0VXNlckluZm8oKVxuICAgIH1cbiAgICBnZXRVc2VySW5mbyAoKSB7XG4gICAgICB3eC5sb2dpbigpXG4gICAgICB3eC5nZXRVc2VySW5mbyh7XG4gICAgICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcbiAgICAgICAgICB0aGlzLnVzZXJJbmZvLm5pY2tOYW1lPXJlcy51c2VySW5mby5uaWNrTmFtZVxuICAgICAgICAgIHRoaXMudXNlckluZm8uYXZhdGFyVXJsPXJlcy51c2VySW5mby5hdmF0YXJVcmxcbiAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnVzZXJJbmZvLmF2YXRhclVybClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG5cbiAgfVxuIl19