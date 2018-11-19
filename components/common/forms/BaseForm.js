import React, {Component} from "react";
import stat from "utils/analytics";
import axios from "axios";
import getConfig from 'next/config';
import {toast} from "react-toastify"

const config = getConfig();


class BaseForm extends Component {

  verifyCallback = value => {
    this.setState({verified: value});
  };
  handleSubmit = (successCallBack, errorCallBack) => async e => {
    e.preventDefault();
    const {targetID = "form submit"} = this.props;
    stat.triggerTarget.formSubmit(targetID);
    let wloc = "default server side location";
    if (process.browser && window.location !== undefined) {
      wloc = window.location.toString();
    }
    let {
      name = "",
      phone = "",
      email = "",
      theme = "",
      worktype = "",
      discipline = "",
      deadline = "",
      size = "",
      comment = "",
      files = [],
      verified = false,
    } = this.state.data;
    let {formType = "default formType at " + wloc} = this.state;
    if (!this.state.verified) {
      //window.alert('Пожалуйста, пройдите каптчу');
      //return
    }
    const _this = this;
    let formData = new FormData();
    formData.append("brand", "besmarter");
    formData.append("form", formType);
    formData.append("source", wloc);
    formData.append("name", name);
    formData.append("phone", phone);
    formData.append("email", email);
    formData.append("theme", theme);
    formData.append("worktype", worktype.value);
    formData.append("discipline", discipline);
    formData.append("deadline", deadline);
    formData.append("size", size);
    formData.append("comment", comment);
    files.forEach(file => {
      formData.append("files", file);
    });
    formData.append("verified", verified);
    let url = "/api/form_data";
    if (config.publicRuntimeConfig.runtime.development) {
      url = 'http://localhost:3001/api/form_data'
    }
    axios({
      method: "POST",
      url: url,
      data: formData,
      config: {headers: {"Content-Type": "multipart/form-data"}}
    })
      .then(function (response) {
        const {data = {}} = response;
        const {error = false, id, msg} = data;
        if (error) {
          /* ошибка со стороны сервера */
          _this.setState({
            formSent: {
              ..._this.state.formSent,
              error: msg
            }
          });
        } else {
          /* ушло хорошо */
          _this.setState({
            formSent: {
              ..._this.state.formSent,
              bool: true,
              number: id
            }
          }, _this.onSent);
          successCallBack && successCallBack();
        }
        _this.clearFormData();
      })
      .catch(function (error) {
        //handle error
        if (error.response === undefined) {
          // not an axios error
          console.log('not an axios error, here is dump:', error);
          return;
        }
        console.log('catch and toast', error);
        /*catch and toast TypeError: t is not a function
    at l (commons.85fc1ee1e428f389dabb.js:formatted:7842)
    at commons.85fc1ee1e428f389dabb.js:formatted:6485*/
        toast.error(<span>Ой! Что-то пошло не так и заявка не отправилась. Пожалуйста, позвоните нам по <a className="" href='tel:+74957724090'>+7 495 772 40 90.</a></span>, {
          position: toast.POSITION.TOP_RIGHT
        });
        errorCallBack && errorCallBack();
      });
  };

  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.dataDefaults = {
      name: "",
      phone: "",
      email: "",
      theme: "",
      worktype: {label: "Укажите тип работы", value: ""},
      discipline: "",
      deadline: "",
      size: "",
      comment: "",
      files: [],
      fileName: "Добавить файл",
      verified: "",
    };
    const {formType = "default formType"} = props;
    this.state = {
      data: this.dataDefaults,
      formType: formType,
      source: "server side default value",
      formSent: {bool: false, number: "", error: false}
    };
  }

  onSent() {
    console.log('BaseForm calls onSent');
    if (this.props.onSent) {
      this.props.onSent()
    }
  }

  saveData(changes) {
    let data = this.state.data;
    Object.keys(changes).map((key) => {
      data[key] = changes[key]
    });
    this.setState({data}, () => {
      this.formDataSave(this.state.data);
      window.dispatchEvent(new CustomEvent('form data', {detail: this.state.data}));
    });
  }

  formDataLoad() {
    let data = localStorage.getItem('form data');
    if (data === undefined || data === null || data === "") {
      return this.dataDefaults
    }
    try {
      data = JSON.parse(data);
    } catch (e) {
      return this.dataDefaults
    }
    // put defaults to absent keys
    Object.keys(this.dataDefaults).map((key) => {
      if (data[key] === undefined) {
        data[key] = this.dataDefaults[key];
      }
    });
    data.files = [];
    return data;
  }

  formDataSave(data) {
    localStorage.setItem('form data', JSON.stringify(data));
  }

  componentDidMount() {
    let data = this.formDataLoad();
    this.setState({data});
    /* subscribe to localstorage changes*/
    window.addEventListener('storage', (e) => {
      if (e.key !== 'form data') {
        return true;
      }
      let data = JSON.parse(e.newValue);
      if (data === null) {
        data = {};
      }
      window.dispatchEvent(new CustomEvent('form data', {detail: data}));
    });
    window.addEventListener('form data', (e) => {
      this.setState({data: e.detail});
    });
  }

  componentWillUnmount() {
    this.saveData(this.state.data);
  }

  clearFormData() {
    const data = this.state.data;
    const {name, phone, email} = this.state.data;
    this.saveData(this.dataDefaults);
    this.saveData({name, phone, email});
  }

  onDrop(files) {
    if (files.length === 0) {
      return;
    }
    files.map(file => this.saveData({files: [...this.state.data.files, file]}));
  }

  removeFile(index) {
    this.saveData({
      files: [
        ...this.state.data.files.slice(0, index),
        ...this.state.data.files.slice(index + 1, this.state.data.files.length)
      ]
    });
  }

  render() {
    return (<div>Do not use me like this. Read the manual.</div>);
  }

}

export default BaseForm;
