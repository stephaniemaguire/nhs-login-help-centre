const Validators = (function() {
  const EMAIL_REGEX = /(^[a-zA-Z0-9_.+'-]+@[a-zA-Z0-9-]+(?!.*?\.\.)(?!.*\.$)\.[a-zA-Z0-9-.]+$)/;

  return {
    combineValidators(validators) {
      return formData => validators.reduce((error, fn) => error || fn(formData), null);
    },

    hasValue(key, errorMessage) {
      return formData => (formData.get(key).trim().length ? null : errorMessage);
    },

    matchesPattern(key, pattern, errorMessage) {
      return formData => (pattern.test(formData.get(key).trim()) ? null : errorMessage);
    },

    validEmail(key, errorMessage) {
      return Validators.matchesPattern(key, EMAIL_REGEX, errorMessage);
    },
  };
})();
