using System;
using System.Collections.Generic;
using System.Data.Entity.Migrations;
using System.Linq;
using System.Web;

namespace Diseno.Clases
{
    public class clsProductos
    {
        private principeFrescoEntities db = new principeFrescoEntities();

        public Producto producto {  get; set; }

        public string insertar()
        {
            try
            {
                db.Productoes.Add(producto);
                db.SaveChanges();
                return "Se agregó con exito el registro";
            }
            catch (Exception ex)
            {
                return ex.Message;
            }
        }

        public string actualizar()
        {
            try
            {
                db.Productoes.AddOrUpdate(producto);
                db.SaveChanges();
                return "Se actualizó el producto " + producto.Nombre;
            }
            catch (Exception ex)
            {
                return ex.Message;
                throw;
            }
        }

        public Producto consultar(int ID)
        {
            return db.Productoes.FirstOrDefault(e => e.idProducto == ID);
        }

        public List<Producto> ConsultarTodos()
        {
            return db.Productoes
                .OrderBy(e => e.idProducto)
                .ToList();
        }

        public string Eliminar()
        {

            Producto pro = consultar(producto.idProducto);
            db.Productoes.Remove(producto);
            db.SaveChanges();
            return "Se eliminó el registro de id: " + producto.idProducto;
        }
    }
}