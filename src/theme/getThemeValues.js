module.exports.bgColor = (props) =>
  `background:${props.theme.palette.background.default}`;

module.exports.textColor = (props) =>
  `color:${props.theme.palette.text.primary}`;

module.exports.hoverBackground = (props) =>
  `background:${props.theme.palette.grey["50032"]}`;

module.exports.primaryBackground = (props) =>
  `background-color:${props.theme.palette.primary.light}`;

module.exports.primaryColor = (props) =>
  `color:${props.theme.palette.primary.main}`;
