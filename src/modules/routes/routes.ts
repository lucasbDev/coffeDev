import { Router } from "express";
import { ensureAuthenticateClient } from "../../middlewares/ensureAuthenticateClient";
import { ensureAuthenticateDeliveryMan } from "../../middlewares/ensureAuthenticateDeliveryMan";
import { AuthenticateClientController } from "../account/controller/AuthenticateClientController";
import { AuthenticateDeliveryManController } from "../account/controller/AuthenticateDeliveryManController";
import { CreateClientController } from "../clients/controllers/CreateClientController";
import { CreateDeliveriesController } from "../deliveries/controllers/CreateDeliveriesController";
import { FindAllAvalibleController } from "../deliveries/controllers/FindAllAvalible";
import { CreateDeliveryManController } from "../deliveryman/controllers/CreateDeliveryManController";
import { UpdateDeliverymanController } from "../deliveries/controllers/UpdateDeliverymanController";
import { FindAllDeliveriesController } from "../deliveries/controllers/FindAllDeliveriesController";
import { UpdateEndDateController } from "../deliveries/controllers/UpdateEndDateController";

const routes = Router();

const createClientController = new CreateClientController();
const authenticateClientController = new AuthenticateClientController();
const createDeliveryManController = new CreateDeliveryManController();
const authenticateDeliveryManController = new AuthenticateDeliveryManController();
const createDeliveriesController = new CreateDeliveriesController();
const findAllAvailibleController = new FindAllAvalibleController();
const updateDeliverymanController = new UpdateDeliverymanController();
const findAllDeliveriesRepository = new FindAllDeliveriesController();
const updateEndDateController = new UpdateEndDateController();

routes.post("/client/authenticate", authenticateClientController.handle)
routes.post("/deliveryman/authenticate", authenticateDeliveryManController.handle)
routes.post("/client", createClientController.handle)
routes.post("/deliveryman", createDeliveryManController.handle)
routes.post("/deliveries", ensureAuthenticateClient ,createDeliveriesController.handle)

routes.get("/deliveries/availble", ensureAuthenticateDeliveryMan,findAllAvailibleController.handle)
routes.get("/clients/deliveries", ensureAuthenticateClient,findAllDeliveriesRepository.handle)
routes.get("/deliveryman/deliveries", ensureAuthenticateDeliveryMan, findAllDeliveriesRepository.handle)

routes.put("/delivery/updateEndDate/:id",ensureAuthenticateDeliveryMan, updateEndDateController.handle)
routes.put("/deliveries/updateDeliveryman/:id", updateDeliverymanController.handle)
/*usuario autenticado, consegue vizualizar as entregas disponiveis*/

export { routes };
