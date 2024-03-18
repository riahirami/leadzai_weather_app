import { Countries } from "utils/Global.types";
import { upperCaseFirstLetter } from "utils/helpers";
import { COUNTRIES } from "../../utils/countries";
import { StyledCountriesList } from "./Countries.styles";
import { CountryListProps } from "./CountriesList.type";

function CountriesList({ handleCountryChange }: CountryListProps) {
  return (
    <StyledCountriesList>
      <div className="listItem">
        <select onChange={handleCountryChange} className="innerList">
          {COUNTRIES.map((country: Countries) => (
            <option key={country.name} value={country.name}>
              {upperCaseFirstLetter(country.name)}
            </option>
          ))}
        </select>
      </div>
    </StyledCountriesList>
  );
}

export default CountriesList;
