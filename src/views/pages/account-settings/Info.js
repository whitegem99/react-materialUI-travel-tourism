import React, { useState } from "react";
import { Button, Form, FormGroup, Input, Label, Row, Col } from "reactstrap";
import chroma from "chroma-js";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "flatpickr/dist/themes/light.css";
import "../../../assets/scss/plugins/forms/flatpickr/flatpickr.scss";
import { UserContext } from "../../../360/context/user";

export default function Info() {
  const [dob, setDob] = useState(new Date());
  const languages = [
    { value: "english", label: "English", color: "#7367f0" },
    { value: "french", label: "French", color: "#7367f0" },
    { value: "spanish", label: "Spanish", color: "#7367f0" },
    { value: "russian", label: "Russian", color: "#7367f0" },
    { value: "italian", label: "Italian", color: "#7367f0" },
  ];



 
  const { user } = React.useContext(UserContext);

  console.log(user.user._id);
  console.log(user);
  const [id, setId] = useState(user.user._id);
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [facebook, setFacebook] = useState("");
  const [google, setGoogle] = useState("");
  const [instagram, setInstagram] = useState("");
  const [linkid, setLinkid] = useState("");
  const [twitter, setTwitter] = useState("");
  const [website, setWebsite] = useState("");
  const [image, setImage] = useState(null);

  React.useEffect(() => {
    getUser();
  }, []);

  const getUser = () => {
    axios
      .get(`/api/users/${id}`)
      .then((res) => {
        console.log(res.data);
        console.log(res.data[0].name);
        setName(res.data[0].name);
        setUsername(res.data[0].username);
        setBio(res.data[0].bio);
        setFacebook(res.data[0].facebook);
        setGoogle(res.data[0].google);
        setInstagram(res.data[0].instagram);
        setLinkid(res.data[0].linkid);
        setTwitter(res.data[0].twitter);
        setWebsite(res.data[0].website);
        setImage(res.data[0].image);
      })
      .catch((error) => {
        history.push("/");
      });
  };
  const history = useHistory();
  const updateHandel = () => {
    let form = new FormData();
    form.append("username", username);
    form.append("name", name);
    form.append("bio", bio);
    form.append("facebook", facebook);
    form.append("google", google);
    form.append("instagram", instagram);
    form.append("linkid", linkid);
    form.append("twitter", twitter);
    form.append("website", website);

    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };

    axios
      .patch(`/api/users/update-user/${id}`, form, config)
      .then((response) => {
        console.log(response);
        console.log(bio);

        window.location.reload(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <React.Fragment>
        <Form onSubmit={(e) => e.preventDefault()}>
          <Row>
            <Col sm="12">
              <FormGroup>
                <Label for="bio">Bio</Label>
                <Input
                  type="textarea"
                  name="bio"
                  id="bio"
                  rows="3"
                  placeholder="Your bio data here..."
                  value={bio}
                  onChange={(event) => setBio(event.target.value)}
                />
              </FormGroup>
            </Col>

            <Col sm="12">
              <FormGroup>
                <Label for="url">Website URL</Label>
                <Input
                  type="url"
                  name="url"
                  id="url"
                  placeholder="Website URL"
                  value={website}
                  onChange={(event) => setWebsite(event.target.value)}
                />
              </FormGroup>
            </Col>
            {/* <Col sm="12">
              <FormGroup>
                <div className="d-inline-block mr-1">
                  <Radio label="Male" defaultChecked={true} name="gender" />
                </div>
                <div className="d-inline-block mr-1">
                  <Radio label="Female" defaultChecked={false} name="gender" />
                </div>
              </FormGroup>
            </Col> */}
            <Col className="d-flex justify-content-start flex-wrap" sm="12">
              <Button.Ripple
                className="mr-50"
                type="submit"
                color="primary"
                onClick={updateHandel}
              >
                Save Changes
              </Button.Ripple>
              <Button.Ripple type="submit" color="danger">
                Cancel
              </Button.Ripple>
            </Col>
          </Row>
        </Form>
      </React.Fragment>
    </div>
  );
}
