import moment from "moment";
import {useState} from "react";
import EventModal from "../EventModal/EventModal";
import Popup from "reactjs-popup";

export default function EventBlock(props) {
  return (
    <Popup
      keepTooltipInside=".wrap"
      trigger={ props.eventBlock }>
        <EventModal event={props.event}/>
    </Popup>
  )
}