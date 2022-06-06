import React, { Component } from "react";
import { variables } from "./Variables";

const queryParams = new URLSearchParams(window.location.search);
const id = queryParams.get('id');
console.log(id); // 55 test null

export class Single extends Component {

    constructor(props) {
        super(props)

        this.state = {
            item: []

        }
    }

    async asyncRefreshList() {
        const response = await fetch(variables.API_URL + 'item' + '/' + parseInt(id))
        const json = await response.json();
        const data = await this.setState({ item: json })
    }

    refreshList() {


        fetch(variables.API_URL + 'item' + '/' + parseInt(id))
            .then(response => response.json())
            .then(data => {
                this.setState({ item: data });
            })
    }
    componentDidMount() {
        this.asyncRefreshList();
    }

    render() {

        const {
            item
        } = this.state;

        return (
            <div>
                <tbody>
                    {item.map(dep =>
                        <tr key={dep.ItemKey}>
                            <td>{dep.QR_Code}</td>
                            <td>{dep.Item_name}</td>
                            <td>{dep.Item_type}</td>
                            <td>{dep.Maker}</td>
                            <td>{dep.Material}</td>
                            <td>{dep.Size_Dimension_Weight}</td>
                            <td>{dep.Condition}</td>
                            <td>{dep.Accesion_date}</td>
                            <td>{dep.Collector}</td>
                            <td>{dep.Item_narrative}</td>
                            <td>{dep.Provenance}</td>
                            <td>{dep.Cross_references}</td>

                        </tr>
                    )}
                </tbody>
            </div>
        )
    }
}