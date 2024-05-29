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
    public class ProductoController : ApiController
    {
        public List<Producto> Get()
        {
            clsProductos pro = new clsProductos();
            return pro.ConsultarTodos();
        }

        // GET api/<controller>/5
        public Producto Get(int id)
        {
            clsProductos pro = new clsProductos();
            return pro.consultar(id);
        }

        // POST api/<controller>
        public string Post([FromBody] Producto prod)
        {
            clsProductos pro = new clsProductos();
            pro.producto = prod;
            return pro.insertar();
        }

        // PUT api/<controller>/5
        public string Put([FromBody] Producto prod)
        {
            clsProductos pro = new clsProductos();
            pro.producto = prod;
            return pro.actualizar();
        }

        // DELETE api/<controller>/5
        public string Delete(Producto prod)
        {
            clsProductos pro = new clsProductos();
            pro.producto = prod;
            return pro.Eliminar();
        }
    }
}