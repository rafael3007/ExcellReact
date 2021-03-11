//import styles from "../styles/components/InputAgency.module.css";
import styles from "../../../../../../projetos/testando/My Office Add-in/FrontEnd/styles/components/InputAgency.module.css"
import { InputGroup, InputGroupText, Input, Button } from 'reactstrap';


const InputAgency = (props) => {

    return (
        <div className={styles.InputAgencyContainer}>
            <div className={styles.InputAgencyUniorg}>
                <InputGroup>
                    <InputGroupText>UNIORG</InputGroupText>
                    <Input id="UNIORG"/>
                    <Button color="primary">Buscar</Button>
                </InputGroup>
            </div>
            <div className={styles.InputAgencyName}>
                <InputGroup>
                    <InputGroupText>Nome Da Agência</InputGroupText>
                    <Input  id="NameAgency" />
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
                    <Input id="City"/>
                </InputGroup>
            </div>


        </div>
    );
}

export default InputAgency;