import {makeAutoObservable} from "mobx";

export default class DeviceStore {
  constructor() {
    this._types = [
      {id: 1, name: "Freezers"},
      {id: 2, name: "Smartphones"},
      {id: 3, name: "Laptops"},
      {id: 4, name: "TV"}
    ]
    this._brands = [
      {id: 1, name: "Samsung"},
      {id: 2, name: "Apple"},
      {id: 3, name: "Sony"}
    ]
    this._devices = [
      {id: 1, name: "Iphone 14 Pro", price: 1500, rating: 10, img: "1fbb8ab0-ab37-485c-a13d-159549c5d1c4.jpg"},
      {id: 2, name: "Iphone 13", price: 1000, rating: 10, img: "3889cb6c-6aca-4db6-abbe-2013dc5ef798.jpg"},
      {id: 3, name: "Galaxy S23 Ultra", price: 1300, rating: 8, img: "2fef4a3a-68be-4938-9d36-883c23ebe17c.jpg"},
      {id: 4, name: "Galaxy S21", price: 900, rating: 7, img: "0ded9f7f-34f3-4bda-b9d9-30acf0ed5c7e.jpg"},
      {id: 5, name: "Xperia 1V", price: 1500, rating: 5, img: "93ea45a2-36ec-4b92-a8e6-1499e0e0f11b.jpg"},
    ]
    this._selectedType = {};
    this._selectedBrand = {};
    makeAutoObservable(this);
  }

  setTypes(types) {
    this._types = types;
  }

  setBrands(brands) {
    this._brands = brands;
  }

  setDevices(devices) {
    this._devices = devices;
  }

  setSelectedType(type) {
    this._selectedType = type;
  }

  setSelectedBrand(brand) {
    this._selectedBrand = brand;
  }

  get types() {
    return this._types;
  }

  get brands() {
    return this._brands;
  }

  get devices() {
    return this._devices;
  }

  get selectedType() {
    return this._selectedType;
  }

  get selectedBrand() {
    return this._selectedBrand;
  }
}
