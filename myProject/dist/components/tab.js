'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tab = function (_wepy$component) {
  _inherits(Tab, _wepy$component);

  function Tab() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Tab);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Tab.__proto__ || Object.getPrototypeOf(Tab)).call.apply(_ref, [this].concat(args))), _this), _this.data = {}, _this.props = {
      tabNumber: {
        twoWay: true,
        type: Number
      }
    }, _this.methods = {
      change: function change(id) {
        this.tabNumber = id;
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Tab, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return Tab;
}(_wepy2.default.component);

exports.default = Tab;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYi5qcyJdLCJuYW1lcyI6WyJUYWIiLCJkYXRhIiwicHJvcHMiLCJ0YWJOdW1iZXIiLCJ0d29XYXkiLCJ0eXBlIiwiTnVtYmVyIiwibWV0aG9kcyIsImNoYW5nZSIsImlkIiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7Ozs7Ozs7Ozs7O0lBRXFCQSxHOzs7Ozs7Ozs7Ozs7OztnTEFDbkJDLEksR0FBTyxFLFFBQ1BDLEssR0FBTztBQUNMQyxpQkFBVztBQUNUQyxnQkFBUSxJQURDO0FBRVRDLGNBQU1DO0FBRkc7QUFETixLLFFBU1BDLE8sR0FBVTtBQUNSQyxZQURRLGtCQUNEQyxFQURDLEVBQ0c7QUFDVCxhQUFLTixTQUFMLEdBQWlCTSxFQUFqQjtBQUNEO0FBSE8sSzs7Ozs7NkJBSEEsQ0FFVDs7OztFQVY4QixlQUFLQyxTOztrQkFBakJWLEciLCJmaWxlIjoidGFiLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFiIGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuICAgIGRhdGEgPSB7fVxuICAgIHByb3BzID17XG4gICAgICB0YWJOdW1iZXI6IHtcbiAgICAgICAgdHdvV2F5OiB0cnVlLFxuICAgICAgICB0eXBlOiBOdW1iZXJcbiAgICAgIH1cbiAgICB9XG4gICAgb25Mb2FkICgpIHtcblxuICAgIH1cbiAgICBtZXRob2RzID0ge1xuICAgICAgY2hhbmdlKGlkKSB7XG4gICAgICAgIHRoaXMudGFiTnVtYmVyID0gaWRcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuIl19