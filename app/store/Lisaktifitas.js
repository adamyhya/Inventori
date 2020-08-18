Ext.define('Inventori.store.Lisaktifitas', {
    extend: 'Ext.data.Store',
    storeId: 'lisaktifitas',
    alias: 'store.lisaktifitas',
    fields: [
        'nomor', 'id_notif', 'jenis', 'isi', 'admin', 'status'
    ],
    proxy: {
        type: 'jsonp',
        api: {
            read: "http://localhost/inventaris/apilog.php?action=3",
        },
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
