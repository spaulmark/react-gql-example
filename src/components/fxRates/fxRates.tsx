import React from "react";
import { getApolloClient } from "../../apollo/apolloClient";
import gql from "graphql-tag";

const EXCHANGE_RATES = gql`
  {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`;
interface FXRatesState {
  fxRates: JSX.Element[];
}

export class FXRates extends React.Component<{}, FXRatesState> {
  public constructor(props: {}) {
    super(props);
    this.state = { fxRates: [<p>Loading...</p>] };
  }

  public componentDidMount() {
    getApolloClient()
      .query({
        query: EXCHANGE_RATES
      })
      .then(result => {
        if (!result.data || !result.data.rates) return;
        const results = result.data.rates.map(
          (fx: { currency: string; rate: number }) => (
            <p>{`${fx.currency} @ ${fx.rate}`}</p>
          )
        );
        this.setState({ fxRates: results });
      });
  }

  public render() {
    return <div>{this.state.fxRates}</div>;
  }
}
