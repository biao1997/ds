import Vue from 'vue'
import {
  Button,
  Input,
  Form, FormItem,
  Message,
  Container,
  Header,
  Aside,
  Menu,
  Submenu,
  MenuItem,
  Breadcrumb,
  BreadcrumbItem,
  Tabs,
  Card,
  Row,
  Col,
  Table,
  TableColumn,
  Switch,
  Tooltip,
  Pagination,
  Dialog,
  MessageBox,
  Tag,
  Tree,
  Select,
  Option,
  Cascader,
  Alert,
  Steps,
  Step,
  TabPane,
  Main,
  Checkbox,
  CheckboxGroup,
  Upload
} from 'element-ui'

Vue.use(Button)
  .use(Input)
  .use(Form)
  .use(FormItem)
  .use(Container)
  .use(Header)
  .use(Aside)
  .use(Main)
  .use(Menu)
  .use(Submenu)
  .use(MenuItem)
  .use(Breadcrumb)
  .use(BreadcrumbItem)
  .use(Tabs)
  .use(Row)
  .use(Col)
  .use(Col)
  .use(Card)
  .use(Table)
  .use(TableColumn)
  .use(Switch)
  .use(Tooltip)
  .use(Pagination)
  .use(Dialog)
  .use(Tag)
  .use(Tree)
  .use(Select)
  .use(Option)
  .use(Cascader)
  .use(Alert)
  .use(Tabs)
  .use(TabPane)
  .use(Steps)
  .use(Step)
  .use(Checkbox)
  .use(CheckboxGroup)
  .use(Upload)

// .use(Message)
Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox.confirm
