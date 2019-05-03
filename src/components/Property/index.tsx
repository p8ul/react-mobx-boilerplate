import * as React from "react";
import { inject, observer } from "mobx-react";
import { Grid } from "semantic-ui-react";
import PropertyStore from "../../stores/Property";
import PropertyList from "./PropertyList";
import PropertyForm from "./PropertyForm";
@inject("propertyStore")
@observer
class App extends React.Component<{ propertyStore: PropertyStore }, object> {
  state = {
    title: "Combo House",
    bedrooms: 1,
    bathrooms: 1,
    parking: 1,
    type: "FOR RENT",
    price: 1440,
    location: "Kiambu, Kenya",
    image: "https://i.ytimg.com/vi/wRn_X_XzDTo/maxresdefault.jpg"
  };

  onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value }
    } = e;
    console.warn(name, value, e.target);
    this.setState({ [name]: value });
  };

  onSelectChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    { value, name }: { value: string; name: string }
  ) => {
    this.setState({ [name]: value });
  };

  public addProperty = (): void => {
    this.props.propertyStore.addProperty({ ...this.state });
  };

  public render() {
    const { propertyStore } = this.props;
    return (
      <div className="ui container">
        <p className="title">
          Properties available {propertyStore.propertiesCount}
        </p>
        <Grid columns={2}>
          <Grid.Row>
            <Grid.Column computer={5} mobile={12}>
              <PropertyForm
                property={{ ...this.state }}
                onChange={this.onChange}
                onSelectChange={this.onSelectChange}
                addProperty={this.addProperty}
              />
            </Grid.Column>
            <Grid.Column computer="11" mobile={12}>
              <PropertyList properties={propertyStore.properties} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default App;
