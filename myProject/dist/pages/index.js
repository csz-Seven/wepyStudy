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
      'navigationBarTitleText': '微信',
      'navigationBarTextStyle': 'white',
      'navigationBarBackgroundColor': '#3a393e'
    }, _this.data = {
      currentTab: 3,
      userInfo: {}
    }, _this.$props = { "tab": { "xmlns:v-bind": "", "v-bind:tabNumber.once": "currentTab" } }, _this.$events = {}, _this.components = {
      tab: _tab2.default
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {
      var _this2 = this;

      //      获取信息
      if (this.$parent.globalData.userInfo) {
        this.userInfo = this.$parent.globalData.userInfo;
      } else {
        this.$parent.userInfoReadyCallback = function (res) {
          _this2.userInfo = res.userInfo;
        };
      }

      //      请求Data.json数据
      //      wepy.request('https://api.douban.com/v2/book/1220562').then((res)=>{
      //        console.log(res)
      //      })
      wx.request({
        url: 'https://api.douban.com/v2/book/1220562',
        header: {
          'content-type': 'text/json'
        },
        success: function success(res) {
          console.log(res);
        }
      });
    }
  }, {
    key: 'onReady',
    value: function onReady() {}
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwiZGF0YSIsImN1cnJlbnRUYWIiLCJ1c2VySW5mbyIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwidGFiIiwiJHBhcmVudCIsImdsb2JhbERhdGEiLCJ1c2VySW5mb1JlYWR5Q2FsbGJhY2siLCJyZXMiLCJ3eCIsInJlcXVlc3QiLCJ1cmwiLCJoZWFkZXIiLCJzdWNjZXNzIiwiY29uc29sZSIsImxvZyIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBSUE7Ozs7Ozs7Ozs7O0FBSEE7QUFDQTtBQUNBOzs7SUFHcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1AsZ0NBQTBCLElBRG5CO0FBRVAsZ0NBQTBCLE9BRm5CO0FBR1Asc0NBQWdDO0FBSHpCLEssUUFLVEMsSSxHQUFPO0FBQ0xDLGtCQUFZLENBRFA7QUFFTEMsZ0JBQVU7QUFGTCxLLFFBSVJDLE0sR0FBUyxFQUFDLE9BQU0sRUFBQyxnQkFBZSxFQUFoQixFQUFtQix5QkFBd0IsWUFBM0MsRUFBUCxFLFFBQ1pDLE8sR0FBVSxFLFFBQ1RDLFUsR0FBYTtBQUNSQztBQURRLEs7Ozs7OzZCQUdBO0FBQUE7O0FBRWQ7QUFDTSxVQUFJLEtBQUtDLE9BQUwsQ0FBYUMsVUFBYixDQUF3Qk4sUUFBNUIsRUFBc0M7QUFDcEMsYUFBS0EsUUFBTCxHQUFnQixLQUFLSyxPQUFMLENBQWFDLFVBQWIsQ0FBd0JOLFFBQXhDO0FBQ0QsT0FGRCxNQUdLO0FBQ0gsYUFBS0ssT0FBTCxDQUFhRSxxQkFBYixHQUFxQyxlQUFPO0FBQzFDLGlCQUFLUCxRQUFMLEdBQWdCUSxJQUFJUixRQUFwQjtBQUNELFNBRkQ7QUFHRDs7QUFHUDtBQUNBO0FBQ0E7QUFDQTtBQUNNUyxTQUFHQyxPQUFILENBQVc7QUFDVEMsYUFBSSx3Q0FESztBQUVUQyxnQkFBUTtBQUNOLDBCQUFlO0FBRFQsU0FGQztBQUtUQyxpQkFBUSxpQkFBQ0wsR0FBRCxFQUFPO0FBQ2JNLGtCQUFRQyxHQUFSLENBQVlQLEdBQVo7QUFDRDtBQVBRLE9BQVg7QUFTRDs7OzhCQUNVLENBRVY7Ozs7RUE1Q2dDLGVBQUtRLEk7O2tCQUFuQnBCLEsiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgLy8gIOWvvOWFpee7hOS7tlxuICAvLyAg6ZSZ6K+v5YaZ5rOVIC5wd3lcbiAgLy8gIGltcG9ydCBUYWIgZnJvbSAnLi4vY29tcG9uZW50cy90YWIud3B5J1xuICBpbXBvcnQgVGFiIGZyb20gJy4uL2NvbXBvbmVudHMvdGFiJ1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgICAnbmF2aWdhdGlvbkJhclRpdGxlVGV4dCc6ICflvq7kv6EnLFxuICAgICAgJ25hdmlnYXRpb25CYXJUZXh0U3R5bGUnOiAnd2hpdGUnLFxuICAgICAgJ25hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3InOiAnIzNhMzkzZSdcbiAgICB9XG4gICAgZGF0YSA9IHtcbiAgICAgIGN1cnJlbnRUYWI6IDMsXG4gICAgICB1c2VySW5mbzoge31cbiAgICB9XG4gICAkcHJvcHMgPSB7XCJ0YWJcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOnRhYk51bWJlci5vbmNlXCI6XCJjdXJyZW50VGFiXCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICAgIHRhYjogVGFiXG4gICAgfVxuICAgIG9uTG9hZCAoKSB7XG5cbi8vICAgICAg6I635Y+W5L+h5oGvXG4gICAgICBpZiAodGhpcy4kcGFyZW50Lmdsb2JhbERhdGEudXNlckluZm8pIHtcbiAgICAgICAgdGhpcy51c2VySW5mbyA9IHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLnVzZXJJbmZvXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdGhpcy4kcGFyZW50LnVzZXJJbmZvUmVhZHlDYWxsYmFjayA9IHJlcyA9PiB7XG4gICAgICAgICAgdGhpcy51c2VySW5mbyA9IHJlcy51c2VySW5mb1xuICAgICAgICB9XG4gICAgICB9XG5cblxuLy8gICAgICDor7fmsYJEYXRhLmpzb27mlbDmja5cbi8vICAgICAgd2VweS5yZXF1ZXN0KCdodHRwczovL2FwaS5kb3ViYW4uY29tL3YyL2Jvb2svMTIyMDU2MicpLnRoZW4oKHJlcyk9Pntcbi8vICAgICAgICBjb25zb2xlLmxvZyhyZXMpXG4vLyAgICAgIH0pXG4gICAgICB3eC5yZXF1ZXN0KHtcbiAgICAgICAgdXJsOidodHRwczovL2FwaS5kb3ViYW4uY29tL3YyL2Jvb2svMTIyMDU2MicsXG4gICAgICAgIGhlYWRlcjoge1xuICAgICAgICAgICdjb250ZW50LXR5cGUnOid0ZXh0L2pzb24nXG4gICAgICAgIH0sXG4gICAgICAgIHN1Y2Nlc3M6KHJlcyk9PntcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICAgIG9uUmVhZHkgKCkge1xuXG4gICAgfVxuICB9XG4iXX0=