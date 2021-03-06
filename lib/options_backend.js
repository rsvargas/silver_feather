OptionsBackend = {
  defaultOptions: {
    home_refresh_interval: 90 * 1000,
    mentions_refresh_interval: 150 * 1000,
    dms_refresh_interval: 150 * 1000,
    lists_refresh_interval: 150 * 1000,
    favorites_refresh_interval: 600 * 1000,
    search_refresh_interval: 60 * 1000,
    blockedusers_refresh_interval: 3600 * 1000,
    tweets_per_page: 10,
    max_cached_tweets: 30,
    url_shortener: 'bitly',
    shortener_acct: false,
    shortener_login: '',
    shortener_key: '',
    shortener_oauth: false,
    shortener_token: null,
    shortener_token_secret: '',
    share_include_title: false,
    name_attribute: 'both',
    request_timeout: 15000,
    compose_position: 'top',
    hover_timeout: 1000,

    show_photo_thumbnails: true,
    photo_thumbnail_max_height: 400,

    microblogging_service: 'twitter',

    base_url: 'https://api.twitter.com/1.1/',
    base_oauth_url: 'https://api.twitter.com/oauth/',

    same_signing_urls: true,

    base_signing_url: 'https://api.twitter.com/1.1/',
    base_oauth_signing_url: 'https://api.twitter.com/oauth/',

    base_search_url: 'https://api.twitter.com/1.1/',

    user_stream_url: 'https://userstream.twitter.com/2/user.json',
    use_streaming_api: true,

    tweets_notification_style: 'desktop',
    home_on_page: false,
    home_icon: true,
    mentions_on_page: true,
    mentions_icon: true,
    dms_on_page: true,
    dms_icon: true,
    favorites_on_page: false,
    favorites_icon: false,
    lists_on_page: true,
    lists_icon: true,
    search_on_page: false,
    search_icon: false,

    home_visible: true,
    mentions_visible: true,
    dms_visible: true,
    favorites_visible: true,
    lists_visible: true,
    search_visible: true,

    unified_visible: true,
    home_include_unified: true,
    mentions_include_unified: true,
    dms_include_unified: true,
    favorites_include_unified: false,
    lists_include_unified: false,
    search_include_unified: false,

    reply_all: true,
    show_expanded_urls: true,

    lists_user_data: null,

    idle_color: '#4880a6',
    home_color: '#9c2e2e',
    mentions_color: '#7f870b',
    dms_color: '#7f870b',
    favorites_color: '#7f870b',
    lists_color: '#7f870b',
    search_color: '#7f870b',

    tweets_color_only_unified: false,
    home_tweets_color: 'rgba(0, 72, 255, 0.15)',
    mentions_tweets_color: 'rgba(255, 255, 0, 0.15)',
    dms_tweets_color: 'rgba(0, 255, 0, 0.15)',
    lists_tweets_color: 'rgba(255, 0, 0, 0.15)',
    favorites_tweets_color: 'rgba(0, 0, 0, 0)',
    search_tweets_color: 'rgba(0, 0, 0, 0)',
    quotes_tweets_color: 'rgba(255, 174, 0, 0.15)',

    notify_retweets: 'only_first',
    notification_fade_timeout: 6000,
    theme: 'css/chromified.css,css/chromified-theme/jquery-ui-1.7.2.custom.css',
    font_family: 'Helvetica, Arial, sans-serif',
    font_size: '1.0em',
    show_hits_in_popup: false,
    show_user_autocomplete: true,

    notification_max_popups: 20,
    open_searches_internally: true,
    image_upload_service: 'twitpic.com',
    default_locale: 'auto',

    trending_topics_woeid: 1,

    render_emoji: true,
    auto_expand_quotes: true
  },
  cachedOptions: null,
  optionsData: Persistence.options(),
  save: function(optionsMap, skipReload) {
    this.optionsData.save(JSON.stringify(optionsMap));
    if(skipReload) {
      return;
    }
    this.cachedOptions = this.load();
  },
  load: function(forceDefault) {
    var map = $.extend(true, {}, this.defaultOptions);
    if(forceDefault) {
      return map;
    }
    try {
      var parsedMap = JSON.parse(this.optionsData.val());
      if(parsedMap)
        $.extend(true, map, parsedMap);
    } catch(e) { /* ignored */ }
    return map;
  },
  saveOption: function(option, value) {
    if(this.cachedOptions === null) {
      this.cachedOptions = this.load();
    }
    this.cachedOptions[option] = value;
    this.save(this.cachedOptions, true);
  },
  setDefault: function(option) {
    this.saveOption(option, this.defaultOptions[option]);
  },
  get: function(option) {
    if(this.cachedOptions === null) {
      this.cachedOptions = this.load();
    }
    return this.cachedOptions[option];
  }
};