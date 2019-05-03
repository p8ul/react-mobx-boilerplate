import * as _ from "lodash";
import { action, computed, observable } from "mobx";

export interface IProperty {
  id?: number;
  title: string;
  bedrooms: number;
  bathrooms: number;
  parking: number;
  type: string;
  price: number;
  location: string;
  image: string;
}

export class Property {
  /**
   * @prop {object} properties - Property details
   */
  @observable properties: IProperty[] = [
    {
      id: 1,
      bedrooms: 1,
      bathrooms: 1,
      parking: 1,
      location: "Kiambu, Kenya",
      title: "Shop at Southwest 186th St",
      type: "FOR RENT",
      price: 1500,
      image: "https://i.ytimg.com/vi/wRn_X_XzDTo/maxresdefault.jpg"
    },
    {
      id: 2,
      bathrooms: 1,
      parking: 1,
      location: "Kiambu, Kenya",
      bedrooms: 1,
      title: "Villa in Coral Gables",
      type: "ON SALE",
      price: 1500,
      image:
        "http://modern.realhomes.io/wp-content/uploads/2017/06/property-01-exterior.jpg"
    },
    {
      id: 3,
      bathrooms: 1,
      parking: 1,
      location: "Kiambu, Kenya",
      bedrooms: 1,
      title: "Home in Coral Gables",
      type: "FOR RENT",
      price: 1500,
      image:
        "http://modern.realhomes.io/wp-content/uploads/2017/06/luxury-bedroom.jpg"
    },
    {
      id: 4,
      bathrooms: 1,
      parking: 1,
      location: "Kiambu, Kenya",
      bedrooms: 1,
      title: "Home in Merrick Way",
      type: "ON SALE",
      price: 1500,
      image:
        "http://modern.realhomes.io/wp-content/uploads/2017/06/drawing-room.jpg"
    },
    {
      id: 5,
      bathrooms: 1,
      parking: 1,
      location: "Kiambu, Kenya",
      bedrooms: 1,
      title: "Home in Merrick Way",
      type: "ON SALE",
      price: 1500,
      image:
        "http://modern.realhomes.io/wp-content/uploads/2017/06/drawing-room.jpg"
    }
  ];
  constructor() {
    console.warn("this is .... mobx constructor");
  }

  @action
  public addProperty(property: IProperty): void {
    property.id = this.properties.length + 1;
    this.properties.push(property);
  }

  @action
  public updateProperty(property: IProperty): void {
    _.find(
      this.properties,
      (item: IProperty): any => {
        if (item.id === property.id) {
          item = property;
        }
        return null;
      }
    );
  }

  @computed get propertiesCount() {
    return this.properties.length;
  }
}

export default Property;
