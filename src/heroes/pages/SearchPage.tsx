// import { HeroItem } from '../components';
import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import { FormEvent } from "react";
import { useForm } from "../../hooks/useForm"
import { getHeroesByName } from "../helpers";
import { HeroItem } from "../components";

export const SearchPage = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const { q = '' } = queryString.parse( location.search );
  const heroes = getHeroesByName( q as string );

  const showSarch = ( q?.length === 0);
  const showError = ( q!.length > 0 ) && heroes.length === 0;

  const { searchText, onInputChange } = useForm({
    searchText: q as string
  });

  const onSearchSubmit = ( event: FormEvent ) => {
    event.preventDefault();
    // if( searchText.trim().length <= 1 ) return;

    navigate( `?q=${ searchText }` )
  }

  return (
    <>
      <h1>Search</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={ onSearchSubmit }>
            <input 
              type="text" 
              className="form-control"
              placeholder="Search a Hero"
              name="searchText"
              autoComplete="off"
              value={ searchText }
              onChange={ onInputChange }
            />

            <button className="btn btn-outline-primary mt-3">
              Search
            </button>
          </form>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr />

          <div 
            className="alert alert-primary animate__animated animate__fadeIn" 
            style={{ display: showSarch ? '' : 'none' }}
            aria-label="DivSearchAlert"
          >
            Search a Hero
          </div>

          <div 
            className="alert alert-danger animate__animated animate__fadeIn" 
            style={{ display: showError ? '' : 'none' }}
            aria-label="DivDangerAlert"
          >
            No hero with <b>{ q }</b>
          </div>

          {
            heroes.map( hero => (
              <HeroItem key={hero.id} hero={hero} />
            ))
          }

        </div>
      </div>


    </>
  )
}
