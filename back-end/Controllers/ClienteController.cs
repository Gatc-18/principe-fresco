using Diseno.Clases;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace Diseno.Controllers
{
    [EnableCors(origins: "http://localhost:3000", headers: "*", methods: "*")]
    public class ClienteController : ApiController
    {
        public List<Cliente> Get()
        {
            clsCliente cli = new clsCliente();
            return cli.ConsultarTodos();
        }

        // GET api/<controller>/5
        public Cliente Get(int id)
        {
            clsCliente cli = new clsCliente();
            return cli.consultar(id);
        }

        // POST api/<controller>
        public string Post([FromBody] Cliente clien)
        {
            clsCliente cli = new clsCliente();
            cli.cliente = clien;
            return cli.insertar();
        }

        // PUT api/<controller>/5
        public string Put([FromBody] Cliente clien)
        {
            clsCliente cli = new clsCliente();
            cli.cliente = clien;
            return cli.actualizar();
        }

        // DELETE api/<controller>/5
        public string Delete(Cliente clien)
        {
            clsCliente cli = new clsCliente();
            cli.cliente = clien;
            return cli.Eliminar();
        }
    }
}