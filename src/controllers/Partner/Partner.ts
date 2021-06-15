import { Request, Response } from 'express';
import { CrudController } from '../CrudController';
import {geoDistance}  from "../../common/geo"
var constants = require("../../config/constants");
export class PartnerController extends CrudController {
    public create(req: Request<import("express-serve-static-core").ParamsDictionary>, res: Response): void {
        throw new Error("Method not implemented.");
    }

    public read(req: Request<import("express-serve-static-core").ParamsDictionary>, res: Response): void {
		const fs = require('fs');
		var _ = require('underscore');
		var partners = JSON.parse( fs.readFileSync(constants.DB)).partners;
		var org = req.query.org;
		var kilometers = req.query.kms;
		var lat = req.query.lat;
		var lng = req.query.lng;
		if (org != undefined && org != "" )
		{
			partners = _.filter(partners, function(p){ if (p.organization.toLowerCase().includes(org)) return p;});
			
		}
		
		if (lat != undefined  && lat!="" && lng != undefined  && lng!="" && kilometers != undefined  && kilometers !=0)
		{
			
			partners.forEach(function (partner) {
				var displayPartner = false;
				if (partner.offices !== undefined)
				{
					var offices = partner.offices;
					
					offices.forEach(function (office:any) {
						if (office.coordinates)
						{
							var coordinates = (office.coordinates).split(",");
							var km_far = geoDistance(lat, lng,coordinates[0],coordinates[1],'K');
							office.km_far =km_far;
							
							// multiply by 1000 to change to meters.
							var withinRadius = false;
							if (km_far<=kilometers) 
							{
								displayPartner = true;
								withinRadius = true;
							}
							office.withinRadius = withinRadius;
							
						}
						
					});
					
				}
				partner.displayPartner = displayPartner;
			});
			
			
			partners = _.where(partners,  {"displayPartner" : true})		
			
		}
		partners = _.sortBy(partners, 'organization');
        res.json({ partners: partners);
    }

    public update(req: Request<import("express-serve-static-core").ParamsDictionary>, res: Response): void {
        throw new Error("Method not implemented.");
    }

    public delete(req: Request<import("express-serve-static-core").ParamsDictionary>, res: Response): void {
        throw new Error("Method not implemented.");
    }
}