#$FONTFILE = "access.log";
#open(LOGFILE) or die("Could not open log file.");
foreach $line (<STDIN>) {
    chomp($line);              # remove the newline from $line.
    chop($line);
    my @a = split(/,/,$line);
    my $output = "<option value=\"" . $line . "\">" . $a[0] . "</option>";
    print $output;
    print "\n";
# do line-by-line processing.
}
