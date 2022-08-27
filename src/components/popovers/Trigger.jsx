import { Tooltip } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import {RiDeleteBack2Fill} from "react-icons/ri"
function TriggerRendererProp() {
  return (
    <OverlayTrigger
      placement="bottom"
      overlay={<Tooltip id="button-tooltip-2">After Clicking button this item will removed</Tooltip>}
    >
      {({ ref, ...triggerHandler }) => (
        <Button
          variant="light"
          {...triggerHandler}
          className="d-inline-flex align-items-center"
        >
          <Image
          width="25px"
            ref={ref}
            roundedCircle
            src="https://t3.ftcdn.net/jpg/03/23/92/38/360_F_323923845_sB6dVDxEFFJOqJB6Rn6kCyf3tBe1RRaA.jpg"
          />
          <span className="ms-1"><RiDeleteBack2Fill fontSize={'25px'}/></span>
        </Button>
      )}
    </OverlayTrigger>
  );
}

export default TriggerRendererProp;