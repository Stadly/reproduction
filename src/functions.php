<?php

declare(strict_types=1);

if (!function_exists('pspell_check')) {
    function pspell_check(int $dictionary_link, string $word): bool
    {
        return false;
    }
}
