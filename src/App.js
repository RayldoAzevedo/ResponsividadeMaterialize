import { Select, Icon, DatePicker, } from 'react-materialize'
import { FaFacebook, FaInstagram, FaGithub } from 'react-icons/fa'

import 'materialize-css'
import './App.css';

function App() {
  return (
    <div className="">

      <nav>
        <div className="nav-wrapper blue-grey darken-4 ">
          <a href="#!" className="brand-logo logo">&nbsp;&nbsp;
            <img src="materialize.png" width="80px" height="60px" />
          </a>
          <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
          <ul className="right hide-on-med-and-down">
            <li><a href="#HTML">HTML</a></li>
            <li><a href="#CSS">CSS</a></li>
            <li><a href="#Javascript">Javascript</a></li>
            <li><a href="#React">React</a></li>
            <li><a href="#Spring Boot">Spring Boot</a></li>
          </ul>
        </div>
      </nav>

      <ul className="sidenav" id="mobile-demo">
        <li><a href="#HTML">HTML</a></li>
        <li><a href="#CSS">CSS</a></li>
        <li><a href="#Javascript">Javascript</a></li>
        <li><a href="#React">React</a></li>
        <li><a href="#Spring Boot">Spring Boot</a></li>
      </ul>


      {/* corpo */}
      <div className="container">
        <div className="row">
          <div className="col s12">
            <h3 className="App">Desenvolvimento Web</h3>
          </div>
        </div>
      </div>

      {/* <!-- ADICIONANDO UM CONTAINER --> */}
      <div className="container">
        {/* <!-- ADICIONANDO UMA LINHA --> */}
        <div className="row">

          <div className="col s12 m6 l3">
            <div className="card">
              <div className="card-image">
                <img height="250px" src="html-css-js.jpg" />
                <span className="card-title black-text">Front-End</span>
              </div>
              <div className="card-content">
                <p>A base do Desenvolvimento Web sendo HTML para estruturar as páginas,
                  CSS para estilização e Javascript para adicionar interarividade.</p>
              </div>
            </div>
          </div>

          <div className="col s12 m4 l3">
            <div className="card">
              <div className="card-image">
                <a href="https://materializecss.com/about.html">
                  <img height="250px" src="materialize.jpg" />
                </a>
              </div>
              <div className="card-content">
                <p>Criado e projetado pelo Google, o Material Design é uma linguagem de design que combina os princípios clássicos do design de sucesso com inovação e tecnologia. O objetivo do Google é desenvolver um sistema de design que permita uma experiência de usuário unificada em todos os seus produtos em qualquer plataforma.</p>
              </div>
            </div>
          </div>

          <div className="col s12 m4 l3">
            <div className="card">
              <div className="card-image">
                <a href="https://pt-br.reactjs.org/">
                  <img height="250px" src="react.png" />
                  <span className="card-title">React</span>
                </a>
              </div>
              <div className="card-content">
                <p>O React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web. Utiliza de tecnologias como HTML, CSS e JavaScript.</p>
              </div>
            </div>
          </div>
          <div className="col s12 m6 l3">
            <div className="card">
              <div className="card-image">
                <a href="https://spring.io/projects/spring-boot">
                  <img height="250px" src="spring.jpg" />
                  <span className="card-title black-text">Back-end</span>
                </a>
              </div>
              <div className="card-content">
                <p>O Spring é um framework open source para a plataforma Java.". Trata-se de um framework não intrusivo, baseado nos padrões de projeto inversão de controle (IoC) e injeção de dependência.</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* <!-- ----------------------- Cadastro ---------------------------- --> */}

      <div className="container">
        <div className="row">
          <div className="col s12 m12 l12">
            <h3 className="App">Increva-se em um de nossos Cursos</h3>
          </div>
        </div>
      </div>


      {/* <!-- formulario --> */}
      <div className="row container">
        <div className="card darken-1">
          <form action="" >

            <div className="row">
              <div className="input-field col s12 m6 l6">
                <i className="material-icons prefix">account_circle</i>
                <input id="icon_prefix" type="text" className="validate" />
                <label for="icon_prefix">Nome</label>
              </div>
              <div className="input-field col s12 m6 l6">
                <i className="material-icons prefix">email</i>
                <input id="icon_email" type="tel" className="validate" />
                <label for="icon_email">E-mail</label>
              </div>
            </div>

            <div className="row">
              <div className="input-field col s12 m6 l5">
                <i className="material-icons prefix">recent_actors</i>
                <input id="icon_cpf" type="text" className="validate" />
                <label for="icon_cpf">CPF</label>
              </div>
              <div className="input-field col s12 m6 l5 offset-l2">
                <i className="material-icons prefix">contact_phone</i>
                <input id="icon_phone" type="tel" className="validate" />
                <label for="icon_phone">Telefone</label>
              </div>
            </div>

            <div className="row">
              <div className="input-field col s12 m6 l4">
                <DatePicker
                  id="DatePicker-7"
                  icon={<Icon>date_range</Icon>}
                  placeholder="Data de Nascimento"
                  options={{
                    autoClose: false,
                    container: null,
                    defaultDate: null,
                    disableDayFn: null,
                    disableWeekends: false,
                    events: [],
                    firstDay: 0,
                    format: 'mmm dd, yyyy',
                    i18n: {
                      cancel: 'Cancel',
                      clear: 'Clear',
                      done: 'Ok',
                      months: [
                        'Janeiro',
                        'Fevereiro',
                        'Março',
                        'Abril',
                        'Maio',
                        'Junho',
                        'Julho',
                        'Agosto',
                        'Setembro',
                        'Outubro',
                        'Novembro',
                        'Dezembro'
                      ],
                      monthsShort: [
                        'Jan',
                        'Fev',
                        'Mar',
                        'Abr',
                        'Mai',
                        'Jun',
                        'Jul',
                        'Ago',
                        'Set',
                        'Out',
                        'Nov',
                        'Dez'
                      ],
                      nextMonth: '›',
                      previousMonth: '‹',
                      weekdays: [
                        'Domingo',
                        'Segunda',
                        'Terça',
                        'Quarta',
                        'Quinta',
                        'Sexta',
                        'Sábado'
                      ],
                      weekdaysAbbrev: [
                        'D',
                        'S',
                        'T',
                        'Q',
                        'Q',
                        'S',
                        'S'
                      ],
                      weekdaysShort: [
                        'Dom',
                        'Seg',
                        'Ter',
                        'Qua',
                        'Qui',
                        'Sex',
                        'Sab'
                      ]
                    },
                    isRTL: false,
                    maxDate: null,
                    minDate: null,
                    onClose: null,
                    onDraw: null,
                    onOpen: null,
                    onSelect: null,
                    parse: null,
                    setDefaultDate: false,
                    showClearBtn: false,
                    showDaysInNextAndPreviousMonths: false,
                    showMonthAfterYear: false,
                    yearRange: 10
                  }}
                />
              </div>

              <div className="input-field col s12 m6 l4">
                <Select
                  icon={<Icon>wc</Icon>}
                  id="Select-15"
                  multiple={false}
                  placeholder="sexo"
                  options={{
                    classes: '',
                    dropdownOptions: {
                      alignment: 'left',
                      autoTrigger: true,
                      closeOnClick: true,
                      constrainWidth: true,
                      coverTrigger: true,
                      hover: false,
                      inDuration: 150,
                      onCloseEnd: null,
                      onCloseStart: null,
                      onOpenEnd: null,
                      onOpenStart: null,
                      outDuration: 250
                    }
                  }}
                  value="">

                  <option value="" disabled selected>Sexo</option>
                  <option value="masculino">Masculino</option>
                  <option value="feminino">Feminino</option>
                </Select>
              </div>

              <div className="input-field col s12 m6 l4">
                <Select
                  icon={<Icon>filter_3</Icon>}
                  id="Select-15"
                  multiple={false}
                  options={{
                    classes: '',
                    dropdownOptions: {
                      alignment: 'left',
                      autoTrigger: true,
                      closeOnClick: true,
                      constrainWidth: true,
                      coverTrigger: true,
                      hover: false,
                      inDuration: 150,
                      onCloseEnd: null,
                      onCloseStart: null,
                      onOpenEnd: null,
                      onOpenStart: null,
                      outDuration: 250
                    }
                  }}
                  value="">
                  <option value="" disabled selected>Curso</option>
                  <option value="hcj">HTML,CSS e JavaScript</option>
                  <option value="frm">Front-End com React + Materialize</option>
                  <option value="bsb">Back-end com SpringBoot</option>
                </Select>


              </div>

            </div>
            <div className="button col s12 md12 l12 ">
              <button className="btn waves-effect waves-light" type="submit" name="action">Enviar
                <i className="material-icons right">send</i>
              </button>
            </div>
          </form>
        </div>
      </div>

      <footer className="page-footer blue-grey darken-4">
        <div className="container">
          <div className="row">
            <div className="col m4 l2 s12">
              <h5 className="white-text">CMP 1491</h5>
              <p className="grey-text text-lighten-4">Responsividade com Materialize</p>
            </div>
            <div className="col m4 l4 s12">
              <h5 className="white-text">Desenvolvimento</h5>
              <p className="grey-text text-lighten-4">Rayldo Azevedo e Estevão Sampaio</p>
            </div>
            <div className="col m4 l2  s12">
              <a className="grey-text text-lighten-4" href='https://github.com/Rayzev/ResponsividadeMaterialize'>
                <h5 className="white-text mouse">Código disponível no GitHub</h5>
              </a>
            </div>
            <div class="col s4 l4 s12">
              <h5 class="white-text">Links de Contato</h5>
              <ul>
                <div className='col s2 m2 l2'>
                  <li ><a class="grey-text text-lighten-3" href="https://www.instagram.com/rayrayazevedo/" ><FaInstagram className='icon-size'></FaInstagram></a></li>
                  <li><a class="grey-text text-lighten-3" href="https://www.facebook.com/rayldoazevedo"><FaFacebook className='icon-size'></FaFacebook></a></li>
                </div>
                <div className='col s2 m2 l2'>
                  <li><a class="grey-text text-lighten-3" href="https://github.com/Rayzev"><FaGithub className='icon-size'></FaGithub></a></li>
                  <li><a class="grey-text text-lighten-3 mouse" href="https://vercel.com/">Vercel</a></li>
                </div>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">
            © 2022 Copyright Text
          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;
