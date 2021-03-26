import * as React from "react";
import { Link } from "react-router-dom";
import DynamicPokemonForms from "./DynamicPokemonForms";

type PokemonType = {
  name: string;
  sprites: {
    front_default: string;
    back_default: string;
  };
  forms: [{ name: string; url: string }];
};

export default function DynamicPokemon(props: any) {
  const [pokemon, setPokemon] = React.useState<PokemonType | null>(null);
  React.useEffect(() => {
    fetch(props.url)
      .then((res) => res.json())
      .then((pokemon) => {
        setPokemon(() => pokemon);
      });
  }, []);
  return !pokemon ? (
    <h4>Pokemon Not Found..</h4>
  ) : (
    <section>
      <h3>{pokemon.name}</h3>
      <img
        src={pokemon.sprites?.front_default}
        alt={`Front default pic of ${pokemon.name}`}
      />
      <img
        src={pokemon.sprites?.back_default}
        alt={`Back default pic of ${pokemon.name}`}
      />
      <h4>Abilities</h4>
      <ul>
        {pokemon.forms.map((form) => {
          return (
            <div key={Math.random() * 1000}>
              <Link
                to={{
                  pathname: "/pokemon/forms/" + pokemon.name,
                  state: pokemon,
                }}
              >
                {form.name}
              </Link>
            </div>
          );
        })}
      </ul>
      <DynamicPokemonForms pokemon={pokemon} />
    </section>
  );
}
