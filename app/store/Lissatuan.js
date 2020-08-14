Ext.define('Inventori.store.Lissatuan', {
    extend: 'Ext.data.Store',
    storeId: 'lissatuan',
    alias: 'store.lissatuan',
    autoLoad: true,
    autoSync: true,
    fields: [
        'nomor', 'id_satuan', 'nama_satuan'
    ],


    proxy: {
        type: 'jsonp',
        api: {
            read: "http://localhost/inventaris/apisatuan.php?action=1",
            create: "http://localhost/inventaris/apisatuan.php?action=2",
            destroy: "http://localhost/inventaris/apisatuan.php?action=3",
            update: "http://localhost/inventaris/apisatuan.php?action=4",
        },
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
