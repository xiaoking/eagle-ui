/**
 * Created by min.xiao
 */
import React,{Component} from 'react';

import {Col,Row,Grid,Button,Dialog,Panel,PanelHeader,PanelContent,PanelFooter,Input,Icon} from '../../../src/index';

export default class Icons extends Component{


    render(){

        return (

            <Grid>
                <Row>
                    <Col sm={2}>
                        <Icon name="adjust_unchecked"></Icon>
                        <h6>adjust_unchecked</h6>
                    </Col>
                    <Col sm={2}>
                        <Icon name="adjust_checked"></Icon>
                        <h6>adjust_checked</h6>
                    </Col>
                    <Col sm={2}>
                        <Icon name="checkbox_unchecked"></Icon>
                        <h6>checkbox_unchecked</h6>
                    </Col>
                    <Col sm={2}>
                        <Icon name="checkbox_checked"></Icon>
                        <h6>checkbox_checked</h6>
                    </Col>
                    <Col sm={2}>
                        <Icon name="radio_checked"></Icon>
                        <h6>radio_checked</h6>
                    </Col>
                    <Col sm={2}>
                        <Icon name="expand_more"></Icon>
                        <h6>expand_more</h6>
                    </Col>
                </Row>
                <Row>
                    <Col sm={2}>
                        <Icon name="menu"></Icon>
                        <h6>menu</h6>
                    </Col>
                    <Col sm={2}>
                        <Icon name="radio_unchecked"></Icon>
                        <h6>radio_unchecked</h6>
                    </Col>
                    <Col sm={2}>
                        <Icon name="star"></Icon>
                        <h6>star</h6>
                    </Col>
                    <Col sm={2}>
                        <Icon name="star_border"></Icon>
                        <h6>star_border</h6>
                    </Col>
                    <Col sm={2}>
                        <Icon name="wifi"></Icon>
                        <h6>wifi</h6>
                    </Col>
                    <Col sm={2}>
                        <Icon name="calendar"></Icon>
                        <h6>calendar</h6>
                    </Col>
                </Row>
                <Row>
                    <Col sm={2}>
                        <Icon name="arrow_back"></Icon>
                        <h6>arrow_back</h6>
                    </Col>
                    <Col sm={2}>
                        <Icon name="arrow_downward"></Icon>
                        <h6>arrow_downward</h6>
                    </Col>
                    <Col sm={2}>
                        <Icon name="arrow_drop_down"></Icon>
                        <h6>arrow_drop_down</h6>
                    </Col>
                    <Col sm={2}>
                        <Icon name="arrow_drop_up"></Icon>
                        <h6>arrow_drop_up</h6>
                    </Col>
                    <Col sm={2}>
                        <Icon name="arrow_upward"></Icon>
                        <h6>arrow_upward</h6>
                    </Col>
                    <Col sm={2}>
                        <Icon name="place"></Icon>
                        <h6>place</h6>
                    </Col>
                </Row>
                <Row>
                    <Col sm={2}>
                        <Icon name="check"></Icon>
                        <h6>check</h6>
                    </Col>
                    <Col sm={2}>
                        <Icon name="chevron_left"></Icon>
                        <h6>chevron_left</h6>
                    </Col>
                    <Col sm={2}>
                        <Icon name="chevron_right"></Icon>
                        <h6>chevron_right</h6>
                    </Col>
                    <Col sm={2}>
                        <Icon name="close"></Icon>
                        <h6>close</h6>
                    </Col>
                    <Col sm={2}>
                        <Icon name="expand_less"></Icon>
                        <h6>expand_less</h6>
                    </Col>
                    <Col sm={2}>
                        <Icon name="my_location"></Icon>
                        <h6>my_location</h6>
                    </Col>
                </Row>
                <Row>
                    <Col sm={2}>
                        <Icon name="map"></Icon>
                        <h6>map</h6>
                    </Col>
                    <Col sm={2}>
                        <Icon name="photo_camera"></Icon>
                        <h6>photo_camera</h6>
                    </Col>
                    <Col sm={2}>
                        <Icon name="folder_open"></Icon>
                        <h6>folder_open</h6>
                    </Col>
                    <Col sm={2}>
                        <Icon name="folder"></Icon>
                        <h6>folder</h6>
                    </Col>
                    <Col sm={2}>
                        <Icon name="add"></Icon>
                        <h6>add</h6>
                    </Col>
                    <Col sm={2}>
                        <Icon name="remove"></Icon>
                        <h6>remove</h6>
                    </Col>
                </Row>
                <Row>
                    <Col sm={2}>
                        <Icon name="search"></Icon>
                        <h6>search</h6>
                    </Col>
                    <Col sm={2}>
                        <Icon name="home"></Icon>
                        <h6>home</h6>
                    </Col>
                    <Col sm={2}>
                        <Icon name="favorite"></Icon>
                        <h6>favorite</h6>
                    </Col>
                    <Col sm={2}>
                        <Icon name="favorite_border"></Icon>
                        <h6>favorite_border</h6>
                    </Col>
                    <Col sm={2}>
                        <Icon name="query_builder"></Icon>
                        <h6>query_builder</h6>
                    </Col>
                </Row>

            </Grid>
        );
    }
}