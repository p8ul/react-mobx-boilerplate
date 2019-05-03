import React from "react";
import { Icon } from "semantic-ui-react";
import { IProperty } from "../../stores/Property";
export interface IAppProps {
  property: IProperty;
}

export default function PropertyCard({ property }: IAppProps) {
  return (
    <div className="property__card animated fadeIn">
      <div className="property__card__container">
        <div className="property__card__image">
          <img
            alt="thisisapropertyimage"
            src={property.image}
            className="ui image"
          />
        </div>
        <div className="property__card__details">
          <div className="row__content">
            <div className="flex _row space-between">
              <div className="label bg-primary">
                <span>{property.type}</span>
              </div>
              <div className="price huge-title">
                <span>${property.price}</span>
              </div>
            </div>
          </div>

          <div className="row__content">
            <div className="flex _row space-between">
              <div className="title">{property.title}</div>
              <Icon name="heart outline" color="red" />
            </div>
          </div>

          <div className="row__content">
            <div className="flex _row space-around">
              <div className="flex _column align-center">
                <Icon
                  name="bed"
                  size="big"
                  className="property__card__details__amenity_icon"
                  color="orange"
                />
                {property.bathrooms} bedroom
              </div>
              <div className="flex _column align-center">
                <Icon
                  name="shower"
                  size="big"
                  className="property__card__details__amenity_icon"
                  color="olive"
                />
                {property.bathrooms} bathroom
              </div>
              <div className="flex _column align-center">
                <Icon
                  name="car"
                  size="big"
                  className="property__card__details__amenity_icon"
                  color="brown"
                />
                {property.parking} parking
              </div>
            </div>
          </div>
          <div className="row__content">
            <div className="flex _row property__card__details__footer">
              <Icon name="map marker alternate" />
              <div className="title">{property.location}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
