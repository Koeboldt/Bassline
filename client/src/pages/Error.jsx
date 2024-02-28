import {useRouteError} from "react-router-dom";
import { Row, Col, Card } from 'antd';
import smashedGuitar from '../components/assets/img/Smashed_Gutars_Matt_Sorum_6465370891.jpg';

export default function ErrorPage () {
    const error = useRouteError();
    console.error(error);

    return(
        <div id="error page">
            <Row justify="center">
                <Col xs={24} sm={12} md={10} lg={8} xl={6}>
                    <img src={smashedGuitar} alt="Smashed Guitar" />
                </Col>
                <Col xs={24} sm={12} md={14} lg={16} xl={18}>
                    <Card className='error-content' bordered={false}>
                        <div className="error-content">
                            <h1>Unexpected error has occurred</h1>
                            <p>Error</p>
                            <p>
                                <i>{error.statusText || error.message}</i>
                            </p>
                        </div>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}