import Carousel from 'react-bootstrap/Carousel';

import test from "../../../src/images/test.jpeg";
import a from "../../../src/images/a.jpeg";
import b from "../../../src/images/b.jpeg";
import c from "../../../src/images/c.jpeg";
import d from "../../../src/images/d.jpeg";
import e from "../../../src/images/e.jpeg";
import f from "../../../src/images/f.jpeg";
import g from "../../../src/images/g.jpeg";
import dois from "../../../src/images/2.jpeg";
import sombra from "../../../src/images/sombra.jpeg";
import banco from "../../../src/images/banco.jpeg";




function carouselTest() {



  return (
    <Carousel interval="5000000" touch="true">
      <Carousel.Item>
        <img
          style={{ maxWidth: "520px", minHeight: "520px" }}
          className="d-block w-100 "
          src={sombra}
        />
        <Carousel.Caption style={{ backgroundColor:  "rgb(0 4 10 / 85%)"  }}> 
        <div >
          <p>Fiz esse presentinho pra te dar enquanto não posso te ver.</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ maxWidth: "520px", minHeight: "520px" }}
          className="d-block w-100 "
          src={e}
        />
        <Carousel.Caption style={{ backgroundColor:  "rgb(0 4 10 / 85%)"  }}> 
        <div >
          <p>Ter ido aquele dia para aquela pracinha foi a melhor coisa que eu podia ter feito.</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ maxWidth: "520px", minHeight: "520px" }}
          className="d-block w-100 "
          src={banco}
        />
        <Carousel.Caption style={{ backgroundColor:  "rgb(0 4 10 / 85%)"  }}> 
        <div >
          <p>Foi nesse banco que notei a pessoa divertida e interessante que vc é.</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ maxWidth: "520px", minHeight: "520px" }}
          className="d-block w-100 "
          src={b}
        />
        <Carousel.Caption style={{ backgroundColor:  "rgb(0 4 10 / 85%)"  }}> 
        <div >
          <p>Foi nesse dia onde percebi que mesmo se não der tudo certo agt da um jeitinho kkkkkkkkk</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ maxWidth: "520px", minHeight: "520px" }}
          className="d-block w-100 "
          src={dois}
          alt="First slide"
        />
        <Carousel.Caption style={{ backgroundColor:  "rgb(0 4 10 / 85%)"  }}> 
        <div >
          <p>E nesse dia eu já estava perdidamente apaixonado.</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ maxWidth: "520px", minHeight: "520px" }}
          className="d-block w-100 "
          src={test}
          alt="First slide"
        />
        <Carousel.Caption style={{ backgroundColor:  "rgb(0 4 10 / 85%)"  }}> 
        <div >
          <p>O seu jeito de demonstrar afeto conquistou meu coração.</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ maxWidth: "520px", minHeight: "520px" }}
          className="d-block w-100 "
          src={g}
          alt="First slide"
        />
        <Carousel.Caption style={{ backgroundColor:  "rgb(0 4 10 / 85%)"  }}> 
        <div >
          <p>Sempre atenciosa.</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ maxWidth: "520px", minHeight: "520px" }}
          className="d-block w-100 "
          src={c}
        />
        <Carousel.Caption style={{ backgroundColor:  "rgb(0 4 10 / 85%)"  }}> 
        <div >
          <p>TE AMO minha pretinha gostosa S2</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item> 
    </Carousel>
  );
}


export default carouselTest;