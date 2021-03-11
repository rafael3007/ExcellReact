import * as React from "react";
import { Button, ButtonType } from "office-ui-fabric-react";
import Header from "./Header";
import HeroList, { HeroListItem } from "./HeroList";
import Progress from "./Progress";
import styles from "../../../../../../projetos/testando/My Office Add-in/FrontEnd/styles/components/InputAgency.module.css"
import { InputGroup, InputGroupText, Input, Button } from 'reactstrap';
//import { InputGroup, InputGroupText, Input, Button } from 'reactstrap';
/* global Button, console, Excel, Header, HeroList, HeroListItem, Progress */

export default class App extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      listItems: []
    };
  }

  componentDidMount() {
    this.setState({
      listItems: [
        {
          icon: "Ribbon",
          primaryText: "Achieve more with Office integration"
        },
        {
          icon: "Unlock",
          primaryText: "Unlock features and functionality"
        },
        {
          icon: "Design",
          primaryText: "Create and visualize like a pro"
        }
      ]
    });
  }

  click = async () => {
    try {
      await Excel.run(async context => {
        /**
         * Insert your Excel code here
         */
        const range = context.workbook.getSelectedRange();

        // Read the range address
        range.load("address");

        // Update the fill color

        range.format.fill.color = "yellow";

        await context.sync();
        console.log(`The range address was ${range.address}.`);
      });
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    const { title, isOfficeInitialized } = this.props;

    if (!isOfficeInitialized) {
      return (
        <Progress title={title} logo="assets/logo-filled.png" message="Please sideload your addin to see app body." />
      );
    }

    return (
      <div className="ms-welcome">
        <Header logo="assets/logo-filled.png" title={this.props.title} message="Welcome" />
        <HeroList message="Discover what Office Add-ins can do for you today!" items={this.state.listItems}>
          <p className="ms-font-l">
            Modify the source files, then click <b>Run</b>.
          </p>
          <Button
            className="ms-welcome__action"
            buttonType={ButtonType.hero}
            iconProps={{ iconName: "ChevronRight" }}
            onClick={this.click}
          >
            Run
          </Button>

          <div className={styles.InputAgencyContainer}>
            <div className={styles.InputAgencyUniorg}>
              <InputGroup>
                <InputGroupText>UNIORG</InputGroupText>
                <Input id="UNIORG" />
                <Button color="primary">Buscar</Button>
              </InputGroup>
            </div>
            <div className={styles.InputAgencyName}>
              <InputGroup>
                <InputGroupText>Nome Da Agência</InputGroupText>
                <Input id="NameAgency" />
              </InputGroup>
            </div>
            <div className={styles.InputAgencyAdress}>
              <InputGroup>
                <InputGroupText>Endereço</InputGroupText>
                <Input id="Adress" />
              </InputGroup>
            </div>
            <div className={styles.InputAgencyCity}>
              <InputGroup>
                <InputGroupText>Cidade</InputGroupText>
                <Input id="City" />
              </InputGroup>
            </div>


          </div>
          

        </HeroList>
      </div>
    );
  }
}
