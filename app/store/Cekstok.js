Ext.define('Inventori.store.Cekstok', {
    extend: 'Ext.data.Store',
    storeId: 'cekstok',
    alias: 'store.cekstok',
    autoLoad: true,
    autoSync: true,
    fields: [
        'id_barang', 'jumlah_barang'
    ],


    proxy: {
        type: 'jsonp',
        api: {
            read: "http://localhost/inventaris/apicekstok.php",
        },
        reader: {
            type: 'json',
            rootProperty: 'items'

        }
    }
});
