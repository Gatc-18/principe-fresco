using System;
using System.Collections.Generic;
using System.Data.Entity.Migrations;
using System.Linq;
using System.Web;

namespace Diseno.Clases
{
    public class clsTienda
    {
        private principeFrescoEntities db = new principeFrescoEntities();

        public Tienda Tienda { get; set; }

        public string insertar()
        {
            try
            {
                db.Tiendas.Add(Tienda);
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
                db.Tiendas.AddOrUpdate(Tienda);
                db.SaveChanges();
                return "Se actualizó el stand " + Tienda.idTienda;
            }
            catch (Exception ex)
            {
                return ex.Message;
                throw;
            }
        }

        public Tienda consultar(int ID)
        {
            return db.Tiendas.FirstOrDefault(e => e.idTienda == ID);
        }

        public List<Tienda> ConsultarTodos()
        {
            return db.Tiendas
                .OrderBy(e => e.idTienda)
                .ToList();
        }

        public string Eliminar()
        {

            Tienda ti = consultar(Tienda.idTienda);
            db.Tiendas.Remove(Tienda);
            db.SaveChanges();
            return "Se eliminó el registro de id: " +   Tienda.idTienda;
        }
    }
}