/**
 * New script file
 */

/**
 * @param {org.acme.data.pasien.ResepObat} shipmentReceived - the ShipmentReceived transaction
 * @transaction
 */
async function ResepLab(resep) {  // eslint-disable-line no-unused-vars

    const kontrak = resep.contract;
  	console.log('Menambahkan data check lab : '+ resep.jenis);
  
  	if (kontrak.resep) {
        kontrak.resep.push(resep);
    } else {
        kontrak.resep = [resep];
    }
    
  	const kontrakRegistry = await getAssetRegistry('org.acme.data.pasien.Contract');
    await kontrakRegistry.update(kontrak);

    
}
/**
 * @param {org.acme.data.pasien.ResepObat} shipmentReceived - the ShipmentReceived transaction
 * @transaction
 */
async function ResepObat(resep) {  // eslint-disable-line no-unused-vars

    const kontrak = resep.contract;
  	console.log('Menambahkan data resep obat : '+ resep.jenis +', dengan jumlah obat : ' + resep.jumlah);
  
  	if (kontrak.resep) {
        kontrak.resep.push(resep);
    } else {
        kontrak.resep = [resep];
    }
    
  	const kontrakRegistry = await getAssetRegistry('org.acme.data.pasien.Contract');
    await kontrakRegistry.update(kontrak);    
}

/**
 * A shipment has been received by an importer
 * @param {org.acme.data.pasien.Tindakan} shipmentReceived - the ShipmentReceived transaction
 * @transaction
 */
async function Tindakan(tindakan) {  // eslint-disable-line no-unused-vars

    const kontrak = tindakan.contract;
  	console.log('Menambahkan data tindakan dengan id : '+ tindakan.idTindakan +', dengan jenis tindakan : ' + tindakan.jenisTindakan);
  
  	if (kontrak.tindakan) {
        kontrak.tindakan.push(tindakan);
    } else {
        kontrak.tindakan = [tindakan];
    }
    
  	const kontrakRegistry = await getAssetRegistry('org.acme.data.pasien.Contract');
    await kontrakRegistry.update(kontrak);
}


