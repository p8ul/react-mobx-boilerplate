import React from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";
import { IProperty } from "../../stores/Property";

export interface IAppProps {
  property: IProperty;
  onChange: (arg: any) => any;
  onSelectChange: (arg: any, arg2: any) => any;
  addProperty: () => any;
}

export const PropertyForm = ({ property, onChange, onSelectChange, addProperty }: IAppProps) => {
  const options = [
    { key: "FOR RENT", text: "FOR RENT", value: "FOR RENT" },
    { key: "f", text: "ON SALE", value: "ON SALE" }
  ];
  return (
    <Form className="property-form">
      <Form.Field>
        <label>Property Name</label>
        <input
          name="title"
          value={property.title}
          onChange={onChange}
          placeholder="Property Name"
        />
      </Form.Field>
      <Form.Group widths="equal">
        <Form.Input
          name="bedrooms"
          value={property.bedrooms}
          onChange={onChange}
          type="number"
          fluid
          label="Bedrooms"
          placeholder=""
        />
        <Form.Input
          name="bathrooms"
          value={property.bathrooms}
          onChange={onChange}
          type="number"
          fluid
          label="Bathrooms"
          placeholder=""
        />
        <Form.Input
          name="parking"
          value={property.parking}
          onChange={onChange}
          type="number"
          fluid
          label="Parkings"
          placeholder="1"
        />
        {/* <Form.Select fluid label='Parkings' options={options} placeholder='Gender' /> */}
      </Form.Group>
      <Form.Group widths="equal">
        <Form.Select
          fluid
          label="Type"
          options={options}
          placeholder="type"
          name="type"
          value={property.type}
          onChange={onSelectChange}
        />
        <Form.Input
          name="price"
          type="number"
          value={property.price}
          onChange={onChange}
          fluid
          label="price"
          placeholder=""
        />
      </Form.Group>
      <Form.Field>
        <label>Location</label>
        <input
          name="location"
          placeholder="Location"
          value={property.location}
          onChange={onChange}
        />
      </Form.Field>
      <Form.Field>
        <label>Image (url)</label>
        <input
          name="image"
          type="url"
          placeholder="image"
          value={property.image}
          onChange={onChange}
        />
      </Form.Field>
      <Button className="bg-blue" onClick={() => addProperty()} type="submit">Add property</Button>
    </Form>
  );
};

export default PropertyForm;
