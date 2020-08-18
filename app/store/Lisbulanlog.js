Ext.define('Inventori.store.Lisbulanlog', {
    extend: 'Ext.data.Store',
    storeId: 'lisbulanlog',
    alias: 'store.lisbulanlog',
    //autoLoad: true,
    //autoSync: true,
    fields: [
        'tahun'
    ],
    proxy: {
        type: 'jsonp',
        api: {
            read: "http://localhost/inventaris/apilog.php?action=1",
        },
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});

