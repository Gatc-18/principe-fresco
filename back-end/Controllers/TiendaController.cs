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
    [EnableCors(origins: "ingrese aqui la URL de la pagina", headers: "*", methods: "*")]
    public class TiendaController : ApiController
    {
        // GET api/<controller>
        public List<Tienda> Get()
        {
            clsTienda ti = new clsTienda();
            return ti.ConsultarTodos();
        }

        // GET api/<controller>/5
        public Tienda Get(int id)
        {
            clsTienda ti = new clsTienda();
            return ti.consultar(id);
        }

        // POST api/<controller>
        public string Post([FromBody] Tienda tien)
        {
            clsTienda ti = new clsTienda();
            ti.Tienda = tien;
            return ti.insertar();
        }

        // PUT api/<controller>/5
        public string Put([FromBody] Tienda tien)
        {
            clsTienda ti = new clsTienda();
            ti.Tienda = tien;
            return ti.actualizar();
        }

        // DELETE api/<controller>/5
        public string Delete(Tienda tien)
        {
            clsTienda ti = new clsTienda();
            ti.Tienda = tien;
            return ti.Eliminar();
        }
    }
}