import * as React from "react";
import { IProperty } from "../../stores/Property";
import PropertyCard from './Card';
import {Grid} from 'semantic-ui-react';

export interface IAppProps {
  properties: IProperty[];
}

export default function PropertyList({ properties }: IAppProps) {
  return (
    <div className="ui container property">
     
     <Grid columns={3} stackable>

       <Grid.Row>
       {properties.map((property: IProperty) => {
        return (
          <Grid.Column className="" key={property.id}>
            <PropertyCard property={property} />
         </Grid.Column>
        );
      })}
       </Grid.Row>
     </Grid>
     
      
    </div>
  );
}
