using System;
using System.Collections.Generic;
using System.Data.Entity.Migrations;
using System.Linq;
using System.Web;

namespace Diseno.Clases
{
    public class clsCliente
    {

        private principeFrescoEntities db = new principeFrescoEntities();

        public Cliente cliente { get; set; }

        public string insertar()
        {
            try
            {
                db.Clientes.Add(cliente);
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
                db.Clientes.AddOrUpdate(cliente);
                db.SaveChanges();
                return "Se actualizó el producto " + cliente.Nombre;
            }
            catch (Exception ex)
            {
                return ex.Message;
                throw;
            }
        }

        public Cliente consultar(int ID)
        {
            return db.Clientes.FirstOrDefault(e => e.idCliente == ID);
        }

        public List<Cliente> ConsultarTodos()
        {
            return db.Clientes
                .OrderBy(e => e.idCliente)
                .ToList();
        }

        public string Eliminar()
        {

            Cliente cli = consultar(cliente.idCliente);
            db.Clientes.Remove(cliente);
            db.SaveChanges();
            return "Se eliminó el registro de id: " + cliente.idCliente;
        }
    }
}