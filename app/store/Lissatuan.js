Ext.define('Inventori.store.Lissatuan', {
    extend: 'Ext.data.Store',
    alias: 'store.lissatuan',
    autoLoad: true,
    autoSync: true,
    fields: [
        'nomor', 'id_satuan', 'nama_satuan'
    ],


    proxy: {
        type: 'jsonp',
        api: {
            read: "http://localhost/inventaris/apisatuan.php"
        },
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
